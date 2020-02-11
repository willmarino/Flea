class Shop < ApplicationRecord

  validates :name, :creator_id, :description, presence: true
  validates :name, uniqueness: true


  def set_rating
    total = 0
    count = 0
    self.reviews.each do |r|
      count += 1
      total += r.rating
    end
    self.rating = total / (count * 1.0)
    self.save
  end

  has_many :products,
    class_name: "Product",
    primary_key: :id,
    foreign_key: :shop_id


  belongs_to :creator,
    class_name: "User",
    primary_key: :id,
    foreign_key: :creator_id

  has_many :reviews,
    through: :products,
    source: :reviews

end
