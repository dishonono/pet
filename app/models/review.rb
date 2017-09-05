class Review < ApplicationRecord
  belongs_to :restaurant
  validates :name, presence: true, uniqueness: true
  validates :text, presence: true, uniqueness: true
  validates :rating, numericality: {only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 3}
end
