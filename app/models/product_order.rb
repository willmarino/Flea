class ProductOrder < ApplicationRecord

  validates :product_id, :order_id, :shop_id, presence: :true

  belongs_to :product,
    class_name: "Product",
    primary_key: :id,
    foreign_key: :product_id

  belongs_to :shop,
    class_name: "Shop",
    primary_key: :id,
    foreign_key: :shop_id

  belongs_to :order,
    class_name: "Order",
    primary_key: :id,
    foreign_key: :product_id


end
