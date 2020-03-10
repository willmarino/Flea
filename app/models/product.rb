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

  def self.most_bought
    res = nil
    Product.all.each do |p|
      if !res
        res = p
      elsif res.orders.length < p.orders.length
        res = p
      end
    end
    return res
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
      if p.category.name === category
        products << p
      end
    end
    return products[0..5]
  end

  def self.product_categories
    products = []
    Category.all.each do |cat|
      cur_products = cat.products
      rand_num = rand(0...cur_products.length)
      products << cur_products[rand_num]
      break if products.length == 6
    end
    return products
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
  
  has_many :views,
    class_name: "View",
    primary_key: :id,
    foreign_key: :product_id

  belongs_to :category,
    class_name: "Category",
    primary_key: :id,
    foreign_key: :high_level_category

  # has_many :product_orders,
  has_many :orders,
    class_name: "ProductOrder",
    primary_key: :id,
    foreign_key: :product_id

  has_many :associated_products,
    through: :tags,
    source: :tagged_products



  has_one_attached :photo


end
