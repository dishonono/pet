FactoryGirl.define do


  factory :restaurant do
    name { FFaker::Name.name }
    genre

    transient do
      reviews_count 5
    end

    after(:create) do |restaurant, evaluator|
      #create_list(:review, evaluator.reviews_count, restaurant: restaurant, rating: evaluator)
      create(:review, restaurant: restaurant, rating: 1)
      create(:review, restaurant: restaurant, rating: 2)
      create(:review, restaurant: restaurant, rating: 3)
      create(:review, restaurant: restaurant, rating: 1)
      create(:review, restaurant: restaurant, rating: 3)
    end
  end
end
