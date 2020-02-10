class Tagging < ApplicationRecord

  validates :tag_id, :product_id, presence: true
  validates :tag_id, uniqueness: { scope: :product_id }

  belongs_to :tag,
    class_name: 'Tag',
    primary_key: :id,
    foreign_key: :tag_id

  belongs_to :product,
    class_name: 'Product',
    primary_key: :id,
    foreign_key: :product_id


end
