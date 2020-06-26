class Conversation < ApplicationRecord
  validates :creator_id, :receiver_id, presence: true

  belongs_to :creator,
    class_name: "User",
    primary_key: :id,
    foreign_key: :creator_id

  belongs_to :receiver,
    class_name: "User",
    primary_key: :id,
    foreign_key: :receiver_id

  has_many :messages,
    class_name: "Message",
    primary_key: :id,
    foreign_key: :conversation_id

end
