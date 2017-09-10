FactoryGirl.define do
  factory :review do
    name { FFaker::Name.name }
    text {'very good place'}
  end
end
