class Review < ApplicationRecord

  validates :title, :body, :rating, :item_id, :author_id, presence: true

  belongs_to :product,
    class_name: "Product",
    primary_key: :id,
    foreign_key: :item_id

  belongs_to :user,
    class_name: "User",
    primary_key: :id,
    foreign_key: :author_id

end
