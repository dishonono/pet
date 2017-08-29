require 'rails_helper'

RSpec.describe RestaurantsController, type: :controller do
  context 'when getting page' do

    it "should work" do

      get :index
      expect(response).to be_success
    end
  end
end
