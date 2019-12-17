class Product < ApplicationRecord
  validates :name, :shop_id, :high_level_category, :price, :stock_amt, presence: true

  belongs_to :shop,
    class_name: "Shop",
    primary_key: :id,
    foreign_key: :shop_id

  has_many :reviews,
    class_name: "Review",
    primary_key: :id,
    foreign_key: :item_id

  has_one_attached :photo


end
