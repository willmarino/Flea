class ProductFavorite < ApplicationRecord

  validates :user_id, :product_id, presence: true
  validates :product_id, uniqueness: { scope: :user_id }

  belongs_to :user,
    class_name: "User",
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :product,
    class_name: "Product",
    primary_key: :id,
    foreign_key: :product_id


end
