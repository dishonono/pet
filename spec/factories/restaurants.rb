FactoryGirl.define do


  factory :restaurant do
    name { FFaker::Name.name }
    genre

    transient do
      reviews_count 5
    end

    after(:create) do |restaurant, evaluator|
      create_list(:review, evaluator.reviews_count, restaurant: restaurant)
    end
  end
end
