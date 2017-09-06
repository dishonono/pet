FactoryGirl.define do
  factory :review do
    name { FFaker::Name.name }
    text {'very good place'}
    rating {2}
  end
end
