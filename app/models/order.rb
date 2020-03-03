class Order < ApplicationRecord

    validates :user_id, presence: true

    belongs_to :user,
        class_name: "User",
        primary_key: :id,
        foreign_key: :user_id

    has_many :product_orders,
        class_name: "ProductOrder",
        primary_key: :id,
        foreign_key: :order_id

end
