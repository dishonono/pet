require 'rails_helper'

describe Restaurant, type: :model do

  context "init without name" do
    it 'fails validations' do
      rest = FactoryGirl.create(:restaurant)
      expect(rest.rating()).to eq(2)
    end
  end



end
