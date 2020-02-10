# include UrlFor
class Product < ApplicationRecord
  include Rails.application.routes.url_helpers
  validates :name, :shop_id, :high_level_category, :price, :stock_amt, presence: true
  after_initialize :set_photourl

  def set_photourl
    if self.photo.attached?
      self.photoURL = rails_blob_path(self.photo, only_path: true)
    end
  end

  def rating
    if(!self.reviews)
      return "null"
    end
    total = 0
    self.reviews.each do |review|
      total += review.rating
    end
    return total / (self.reviews.length * 1.0)
  end

  def self.by_ids(ids_arr)
    products = []
    ids_arr.each do |p| # p is id of product
      products << Product.find(p)
    end
    return products
  end

  def self.by_category(category)
    products = []
    Product.all.each do |p|
      if p.high_level_category === category
        products << p
      end
    end
    return products[0..5]
  end

  def self.product_categories
    categories = [
    "Jewelry & Accessories",
    "Clothing & Shoes",
    "Home & Living",
    "Wedding & Party",
    "Toys & Entertainment",
    "Art & Collectibles",
    "Craft & Supplies",
    "Vintage",
    "Gifts"
    ]
    products = []
    categories.each do |category|
      products << Product.find_by(high_level_category: category)
    end
    return products[0..5]
  end

  belongs_to :shop,
    class_name: "Shop",
    primary_key: :id,
    foreign_key: :shop_id

  has_many :reviews,
    class_name: "Review",
    primary_key: :id,
    foreign_key: :item_id

  has_many :taggings,
    class_name: 'Tagging',
    primary_key: :id,
    foreign_key: :product_id
  
  has_many :tags,
    through: :taggings,
    source: :tag

  has_many :associated_products,
    through: :tags,
    source: :tagged_products

  has_one_attached :photo


end
