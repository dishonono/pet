require 'rails_helper'

describe Restaurant, type: :model do

  context "review score" do
    it 'should be average of childs' do
      rest = FactoryGirl.create(:restaurant)
      expect(rest.rating()).to eq(2)
    end
  end



end
