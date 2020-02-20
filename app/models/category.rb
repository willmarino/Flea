class Category < ApplicationRecord
  validates :name, presence: true

  has_many :products,
    class_name: "Product",
    primary_key: :id,
    foreign_key: :high_level_category

end
