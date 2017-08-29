class Restaurant < ApplicationRecord
  belongs_to :genre
  validates :name, presence: true, uniqueness: true
  validates :rating, numericality: {only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 3}
  validates :genre, presence: true
  validates :max_delivey_time,  allow_nil:true , numericality: {only_integer: true, greater_than: 0}
  validates :geo, allow_blank: true, format: {
      with: %r{(\-?\d+(\.\d+)?),(\-?\d+(\.\d+)?)},
      message: 'must be geo coordinates seperated by comma'
  }
end
