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
        cur_id = User.find_by(username: "DataCompiler").id
      end
      @search = Search.create({user_id: cur_id, query: query_string})
    end
    render :new_search
  end

  # fetches 10 searches which were created most recently
  def popular
    last_hundred_searches = Search.order(created_at: :desc)[0..99]
    search_counter = {}
    last_hundred_searches.each do |search|
      if search_counter[search]
        search_counter[search] += 1
      else
        search_counter[search] = 1
      end
    end
    used_terms = []
    @searches = []
    search_vals = search_counter.values.sort![0..9]
    search_counter.each do |k, v|
      if search_vals.include?(v) && !used_terms.include?(k.query.downcase)
        used_terms << k.query.downcase
        @searches << k
      end
      break if @searches.length >= 10
    end
    render :searches_array
  end

  # finds all Tags which begin with search query
  # should change this to include
  def suggested
    query = params[:queryStr]
    @terms = []
    via_tag = Tag.all.select{ |tag| tag.tag_name.downcase.start_with?(query)}
    via_tag.each do |tag|
      @terms << tag.tag_name
    end
    via_product = Product.all.select{ |p| p.name.downcase.start_with?(query)}
    via_category = Category.all.select{ |c| c.name.downcase.start_with?(query)}
    via_product.concat(via_category).each do |obj|
      @terms << obj.name
    end
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
    @product_ids = []
    @tags = []
    @tag_ids = []
    @filters = {}
    # products by query
    Product.all.each do |p|
      p.name.split(" ").each do |word|
        if word.downcase.include?(query)
          @products << p
          @product_ids << p.id
          break
        end
      end
    end
    # tagged products by query
    Tag.all.each do |t|
      if t.tag_name.downcase.start_with?(query)
        t.tagged_products.each do |p|
          @products << p if !@products.include?(p)
          @product_ids << p.id
        end
      end
    end
    # products by query match with category
    Category.all.each do |c|
      c.name.split(" ").each do |word|
        if word.downcase.include?(query)
          c.products.each do |p|
            @products << p if !@products.include?(p)
            @product_ids << p.id
          end
          break
        end
      end
    end
    @products.each do |p|
      # not going to do filtering by each item characteristic from the search page
      # (0...p.options.length).each do |i|
      #   option = p.options[i]
      #   if !@filters[option]
      #     @filters[option] = p.options_details[i]
      #   elsif @filters[option] != p.options_details[i]
      #     p.options_details[i].each do |opdet|
      #       @filters[option] << opdet if !@filters[option].include?(opdet)
      #     end
      #   end
      # end
      # tags
      p.tags.each do |tag|
        if !@tags.include?(tag)
          @tag_ids << tag.id
          @tags << tag 
        end
      end
    end
    @categories = []
    @category_ids = []
    @shops = []
    @products.each do |p|
      cur_cat = p.category
      cur_shop = p.shop
      if !@categories.include?(cur_cat)
        @categories << cur_cat
        @category_ids << cur_cat.id
      end
      @shops << cur_shop if !@shops.include?(cur_shop)
    end

    render :search_main

  end

  def search_main_footer
    # edit idea, send array of ids in params from searchmain which
    # will avoid recommending products already shown in search results
    limit = params[:limit].to_i
    @products = []
    @associated_ids = []
    @recent_ids = []
    if current_user
      user = current_user
    else
      user = User.find_by(username: "DataCompiler")
    end
    user.views.order(created_at: :desc).each do |v|
      view_product = v.product
      if !@recent_ids.include?(view_product.id)
        @recent_ids << view_product.id 
        @products << view_product
      end
      break if @recent_ids.length >= 20
    end
    # if a user does not have 6 product views, I fill the recently viewed component with
    # the most recently viewed products from all other users
    if @recent_ids.length < limit
      last_view_id = View.last.id
      i = 0
      while @recent_ids.length < limit

        id = last_view_id - i
        view = View.find(id)

        if !@recent_ids.include?(view.product_id)
          product = Product.find(view.product_id)
          @products << product
          @recent_ids << product.id
        end
        i += 1
      end
    end

    recent_products = @products
    recent_products.each do |rp|
      rp.associated_products.each do |ap|
        if !@associated_ids.include?(ap.id) && !@recent_ids.include?(ap.id)
          @associated_ids << ap.id
          # @products << ap
        end
        break if @associated_ids.length >= 10
      end
      break if @associated_ids.length >= 10
    end
    @associated_ids = @associated_ids[0..10]
    @associated_ids.each do |id|
      @products << Product.find(id)
    end
    # may pull more produts than necessary, only associated ids are cut short to 10
    @shops = []
    @products.each do |p|
      cur_shop = p.shop
      @shops << cur_shop if !@shops.include?(cur_shop)
    end
    render :search_main_footer
  end


end
