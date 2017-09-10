class Restaurant < ApplicationRecord
  belongs_to :genre
  has_many :reviews
  validates :name, presence: true, uniqueness: true
  validates :genre, presence: true
  validates :max_delivey_time,  allow_nil:true , numericality: {only_integer: true, greater_than: 0}
  validates :geo, allow_blank: true, format: {
      with: %r{(\-?\d+(\.\d+)?),(\-?\d+(\.\d+)?)},
      message: 'must be geo coordinates seperated by comma'
  }

  attr_reader :rating

  def rating
    reviews.average(:rating).to_f.round
  end
end
