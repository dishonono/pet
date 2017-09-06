FactoryGirl.define do



  factory :genre do
    name { FFaker::Name.name }
    factory :genre_without_name do
      name nil
    end
    factory :genre_with_legal_icon do
      icon:"a"
    end
    factory :genre_with_illlegal_icon do
      icon:"aa"
    end
  end


end
