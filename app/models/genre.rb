class Genre < ApplicationRecord
  has_many :restaurants
  validates :name, presence: true, uniqueness: true
  validates :icon, allow_blank: true, format: {
      with: %r{\A\w\z},
      message: 'must be a single char'
  }
end
