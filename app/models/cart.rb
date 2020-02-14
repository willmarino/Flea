class Cart < ApplicationRecord

  validates :user_id, presence: true, uniqueness: true

  belongs_to :user,
    class_name: "User",
    primary_key: :id,
    foreign_key: :user_id

  has_many :cart_items,
    class_name: "CartItem",
    primary_key: :id,
    foreign_key: :cart_id

  has_many :items,
    through: :cart_items,
    source: :product

end
