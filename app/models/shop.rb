class Shop < ApplicationRecord
  include Rails.application.routes.url_helpers
  validates :name, :creator_id, :description, presence: true
  validates :name, uniqueness: true
  after_initialize :set_photourl

  def set_photourl
    if self.photo.attached?
      self.photoURL = rails_blob_path(self.photo, only_path: true)
    end
  end

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

  has_many :shop_views,
    class_name: "ShopView",
    primary_key: :id,
    foreign_key: :shop_id

  belongs_to :creator,
    class_name: "User",
    primary_key: :id,
    foreign_key: :creator_id

  has_many :reviews,
    through: :products,
    source: :reviews

  has_one_attached :photo

end
