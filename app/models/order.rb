class Order < ApplicationRecord

    validates :user_id, :product_ids, presence: true

    belongs_to :user,
        class_name: "User",
        primary_key: :id,
        foreign_key: :user_id

    # belongs_to :product,
    #     class_name: "Product",
    #     primary_key: :id,
    #     foreign_key: :product_id
    
    # has_one :cart,
    #     class_name: "Cart",
    #     primary_key: :id,
    #     foreign_key: :cart_id

    # has_many :items,
    #     through: :cart,
    #     source: :items

end
