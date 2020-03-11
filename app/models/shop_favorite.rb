class ShopFavorite < ApplicationRecord

  validates :user_id, :shop_id, presence: true
  validates :shop_id, uniqueness: { scope: :user_id }

  belongs_to :user,
    class_name: "User",
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :shop,
    class_name: "Shop",
    primary_key: :id,
    foreign_key: :shop_id

end
