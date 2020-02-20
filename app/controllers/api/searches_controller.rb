class Api::SearchesController < ApplicationController

  def create
    query_string = params[:query]
    search = Search.find_by(query: query_string)
    if search
      search.quantity += 1
      @search = search
    else
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

  def recent

  end


end
