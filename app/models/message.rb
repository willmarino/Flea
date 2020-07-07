class Message < ApplicationRecord
  validates :sender_id, :conversation_id, :body, presence: true

  belongs_to :conversation,
    class_name: "Conversation",
    primary_key: :id,
    foreign_key: :conversation_id
    
end
