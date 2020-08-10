class Api::ConversationsController < ApplicationController

  def show
    @conversation = Conversation.find(conversation_id)
    render :show
  end

  def index
    user_id = params["user_id"]
    @conversations = User.find(user_id).conversations
    render :index
  end

  def create
    safe_params = convo_params
    sender_id = current_user.id
    receiver_id = User.find_by(username: safe_params["recipient"]).id
    sender = User.find(sender_id)
    receiver = User.find(receiver_id)
    body = safe_params["body"]
    @conversation = nil
    sender.conversations.each do |c|
      if c.users.include?(receiver)
        @conversation = c
        break
      end
    end
    if @conversation
      @conversation.add_message(sender_id, receiver_id, body)
    else
      @conversation = Conversation.create!
      sender.conversations << @conversation
      receiver.conversations << @conversation
      @conversation.add_message(sender_id, receiver_id, body)
    end
    render :show
  end

  def destroy
    @conversation = Conversation.find(conversation_id)
    users = @conversation.users
    users.each do |user|
      user.remove_conversation(@conversation.id)
    end
    @conversation.destroy
    render :destroy
  end

  def convo_params
    params.require(:info).permit(:sender_id, :recipient, :body)
  end

end