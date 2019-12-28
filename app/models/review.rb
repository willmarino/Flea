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


  def self.filter_by_rating(filter_rating)
    reviews = []
    Review.all.each do |r|
      if r.rating >= filter_rating
        reviews << r
      end
    end
    return reviews
  end

end
