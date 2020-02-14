class CartItem < ApplicationRecord

  validates :cart_id, :item_id, presence: true

  belongs_to :cart,
    class_name: "Cart",
    primary_key: :id,
    foreign_key: :cart_id

  belongs_to :product,
    class_name: "Product",
    primary_key: :id,
    foreign_key: :item_id


end
