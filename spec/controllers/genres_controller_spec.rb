require 'rails_helper'
require 'pp'

RSpec.describe Api::V1::GenresController, type: :controller do
  describe 'when requesting all genres' do

    it "should work" do

      get :index , format: "json"
      expect(response).to be_success
      json = JSON.parse(response.body)
      expect(json.length). to eq(0)

    end
  end

  describe 'when creating legit genre' do

    it "should work" do

      post :create , format: "json",params: {genre: { name: 'vegi', icon:'a' }}
      expect(response).to be_success
      json = JSON.parse(response.body)
      expect(json["name"]). to eq('vegi')
      expect(json["icon"]). to eq('a')
      genre = Genre.first
      expect(genre).not_to be_nil
      expect(genre.name). to eq('vegi')
    end
  end

  describe 'when creating genre without name' do

    it "should fail" do

      post :create , format: "json",params: {genre: { icon:'a' }}
      expect(response).to_not be_success
      json = JSON.parse(response.body)
      expect(json["errors"]["name"].length). to eq(1)

      genre = Genre.first
      expect(genre).to be_nil

    end
  end
end
