class Cart < ApplicationRecord

  validates :user_id, presence: true

  belongs_to :user,
    class_name: "User",
    primary_key: :id,
    foreign_key: :user_id

  has_many :items,
    class_name: "CartItem",
    primary_key: :id,
    foreign_key: :item_id

end
