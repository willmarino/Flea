class Tag < ApplicationRecord

  validates :tag_name, presence: true
  validates :tag_name, uniqueness: true

  has_many :taggings,
    class_name: 'Tagging',
    primary_key: :id,
    foreign_key: :tag_id

  has_many :tagged_products,
    through: :taggings,
    source: :product

end