class Search < ApplicationRecord
  validates :query, presence: true

  belongs_to :user,
    class_name: "User",
    primary_key: :id,
    foreign_key: :user_id

  # belongs_to :user, -> { where user_id: true }

end
