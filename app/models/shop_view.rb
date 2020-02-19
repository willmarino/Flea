class ShopView < ApplicationRecord

  validates :user_id, :shop_id, presence: true

  belongs_to :user,
    class_name: "User",
    primary_key: :id,
    foreign_key: :user_id
  
  belongs_to :shop,
    class_name: "Shop",
    primary_key: :id,
    foreign_key: :shop_id
    
end
