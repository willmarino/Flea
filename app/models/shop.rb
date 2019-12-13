class Shop < ApplicationRecord

  validates :name, :creator_id, :description, presence: true
  validates :name, uniqueness: true

  has_many :products,
    class_name: "Product",
    primary_key: :id,
    foreign_key: :shop_id


  belongs_to :creator,
    class_name: "User",
    primary_key: :id,
    foreign_key: :creator_id

end
