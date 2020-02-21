class Api::SearchesController < ApplicationController

  def create
    query_string = params[:query]
    search = Search.find_by(query: query_string)
    if search
      search.quantity += 1
      @search = search
    else
      if current_user
        cur_id = current_user.id
      else
        cur_id = User.find_by(name: "SearchCompiler").id
      end
        @search = Search.create({user_id: current_user.id, query: query_string})
    end
    render :new_search
  end

  def popular
    @searches = Search.order(created_at: :desc)[0..9]
    render :searches_array
  end

  def suggested
    query = params[:queryStr]
    @terms = Tag.all.select{ |tag| tag.tag_name.start_with?(query)}[0..9]
    render :terms_array

  end

  def search_main
    query = params[:queryStr]
    @products = []
    @tags = []
    @filters = {}
    @associated = []
    # products by query
    Product.all.each do |p|
      p.name.split(" ").each do |word|
        if word.include?(query)
          @products << p
          break
        end
      end
    end
    debugger
    # tagged products by query
    Tag.all.each do |t|
      if t.tag_name.start_with?(query)
        t.tagged_products.each do |p|
          @products << p if !@products.include?(p)
        end
      end
    end
    debugger
    # products by query match with category
    Category.all.each do |c|
      c.name.split(" ").each do |word|
        if word.include?(query)
          c.products.each do |p|
            @products << p if !@products.include?(p)
          end
          break
        end
      end
    end
    debugger
    @products.each do |p|
      # filters
      (0...p.options.length).each do |i|
        option = p.options[i]
        if !@filters[option]
          @filters[option] = p.options_details[i]
        elsif @filters[option] != p.options_details
          # messy, will redo once broad structure is working
          @filters[option] = @filters[option].concat(p.options_details).uniq
        end
      end
      # tags
      p.tags.each do |tag|
        @tags << tag if !@tags.include?(tag)
      end
    end
    @recents = View.all.order(created_at: :desc)[0...20].map{|view| view.product}
    @recents.each do |rp|
      @associated << rp.associated_products
      @associated.flatten!.uniq!
      break if @associated.length >= 10
    end
    @associated = @associated[0..10]
    @categories = @products.map{ |p| p.category }
    debugger



    render :search_main

  end


end
