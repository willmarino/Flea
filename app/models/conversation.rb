class Conversation < ApplicationRecord
  # in order to initialize a conversation, you call Conversation.create and shovel both users into the conversation's users association array
  # in order to add messages to this conversation, you call conversation.add_message with the senders id, the receivers id, and the body text
  # these messages will be accessible as conversation.messages, and as user.conversations[x].messages,
  # x being a number corresponding to the index of the conversation you are looking for the users.conversations array

  has_and_belongs_to_many :users

  def add_message(sender_id, receiver_id, body)
    message = { "sender_id": "#{sender_id}", "receiver_id": "#{receiver_id}", "body": "#{body}" }.to_json
    self.messages << message
    self.save!
  end

  def clear
    self.messages = []
    self.save!
  end

end
