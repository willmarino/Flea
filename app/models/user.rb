class User < ApplicationRecord

  validates :username, :email, :session_token, :password_digest, presence: true
  validates :username, :email, :session_token, :password_digest, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password

  after_initialize :ensure_session_token

  
  has_many :shops,
    class_name: "Shop",
    primary_key: :id,
    foreign_key: :creator_id

  has_one :cart,
    class_name: "Cart",
    primary_key: :id,
    foreign_key: :user_id

  has_many :cart_items,
    through: :cart,
    source: :items

  has_many :reviews,
    class_name: "Review",
    primary_key: :id,
    foreign_key: :author_id

  has_many :orders,
    class_name: "Order",
    primary_key: :id,
    foreign_key: :user_id

  has_many :past_items,
    through: :orders,
    source: :items

  has_one_attached :photo


  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && user.is_password?(password)
    nil
  end
  
  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end
  
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
  
  def reset_session_token!
    self.update(session_token: User.generate_session_token)

  end

  def add_viewed(product_id)
    self.viewed.unshift(product_id)
    self.save!
  end

  def clear_views
    self.viewed = [];
    self.save!
  end

  def all_viewed
      return self.viewed.uniq
  end

  def recently_viewed
    products = []
    if self.all_viewed.length <= 6
      viewed_product_ids = self.all_viewed
      viewed_product_ids.each do |vpi|
        products << Product.find(vpi)
      end

      while products.length < 6
        random_num = rand(Product.first.id..Product.last.id)
        products << Product.find(random_num)
      end
      # debugger

      return products
    else
      viewed_product_ids = self.all_viewed[0..5]
      viewed_product_ids.each do |vpi|
        products << Product.find(vpi)
      end
      return products
    end
  end

  

end
