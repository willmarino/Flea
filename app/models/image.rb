class Image < ApplicationRecord

  validates :url, :name, presence: true

end
