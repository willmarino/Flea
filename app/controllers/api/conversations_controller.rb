class ConversationsController < ApplicationController

  def show
    @conversation = Conversation.find(conversation_id)
    render :show
  end

  def index
    user_id = params.user_id
    @conversations = User.find(user_id).conversations
    render :index
  end

  def create
    safe_params = convo_params
    s_id = safe_params["sender_id"]
    r_id = safe_params["receiver_id"]
    body = safe_params["body"]
    @conversation = Conversation.create!(sender_id: s_id, receiver_id: r_id, body: body)
    render :show
  end

  def destroy
    conversation = Conversation.find(conversation_id)
    conversation.destroy
    # render json: {"conversation_id" : conversation_id}
  end

  def update

  end

  def convo_params
    params.require(:conversation).permit(:sender_id, :receiver_id, :body)
  end

end