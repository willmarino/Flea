class Api::SearchesController < ApplicationController

  # takes in a query, looks through db to see if that query has already been entered
  # if it has, increase it's quantity attribute, else create a new Search obj
  # if a user is logged in, then create the search with that user's id
  # if there is no user logged in, then create the search with dummy user SearchCompiler
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
        @search = Search.create({user_id: cur_id, query: query_string})
    end
    render :new_search
  end

  # fetches 10 searches which were created most recently
  def popular
    @searches = Search.order(created_at: :desc)[0..9]
    render :searches_array
  end

  # finds all Tags which begin with search query
  # should change this to include
  def suggested
    query = params[:queryStr]
    @terms = Tag.all.select{ |tag| tag.tag_name.downcase.start_with?(query)}[0..9]
    render :terms_array
  end

  # grab five most recent product page viewings
  # for each of those products, run through each of their tags
  # in a hash map, collect the tag objects as keys and the number
  # of times they were found attached to one of the five grabbed products
  # as values
  # grab the four most common keys, which are tag objects, and then
  def suggested_searches
    tag_count_hash = {}
    recent_viewings = View.all.order(created_at: :desc)[0...5]
    recent_viewings.each do |view|
      product = Product.find(view.product_id)
      product.tags.each do |tag|
        if tag_count_hash[tag]
          tag_count_hash[tag] += 1
        else
          tag_count_hash[tag] = 1
        end
      end
    end
    sorted_tag_values = tag_count_hash.values.sort!.reverse!
    @tags = []
    (0...4).each do |i|
      val = sorted_tag_values[i]
      tag_count_hash.keys.each do |key|
        if tag_count_hash[key] == val
          @tags << key 
          break
        end
      end
    end
    render :suggested_searches
  end

  def search_main
    query = params[:queryStr].downcase
    @products = []
    @tags = []
    @filters = {}
    # @associated = []
    # products by query
    Product.all.each do |p|
      p.name.split(" ").each do |word|
        if word.downcase.include?(query)
          @products << p
          break
        end
      end
    end
    # tagged products by query
    Tag.all.each do |t|
      if t.tag_name.downcase.start_with?(query)
        t.tagged_products.each do |p|
          @products << p if !@products.include?(p)
        end
      end
    end
    # products by query match with category
    Category.all.each do |c|
      c.name.split(" ").each do |word|
        if word.downcase.include?(query)
          c.products.each do |p|
            @products << p if !@products.include?(p)
          end
          break
        end
      end
    end
    @products.each do |p|
      # filters
      (0...p.options.length).each do |i|
        option = p.options[i]
        if !@filters[option]
          @filters[option] = p.options_details[i]
        elsif @filters[option] != p.options_details[i]
          # messy, will redo once broad structure is working
          p.options_details[i].each do |opdet|
            @filters[option] << opdet if !@filters[option].include?(opdet)
          end
        end
      end
      # tags
      p.tags.each do |tag|
        @tags << tag if !@tags.include?(tag)
      end
    end
    @categories = @products.map{ |p| p.category }
    @shops = @products.map{ |p| p.shop}

    render :search_main

  end

  def search_main_footer
    @associated = []
    @recents = []
    current_user.views.order(created_at: :desc).each do |v|
      @recents << v.product if !@recents.include?(v.product)
      break if @recents.length >= 20
    end
    @recents.each do |rp|
      rp.associated_products.each do |ap|
        @associated << ap if !@associated.include?(ap)
        break if @associated.length >= 10
      end
      break if @associated.length >= 10
    end
    @associated = @associated[0..10]
    @shops = @recents.map{ |p| p.shop }.concat(@associated.map{ |p| p.shop })
    render :search_main_footer
  end


end
