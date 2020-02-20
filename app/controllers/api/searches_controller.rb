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
    # @searches = Search.order(:quantity)
  end

  def suggested

  end

  def recent

  end


end
