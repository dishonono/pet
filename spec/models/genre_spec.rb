require 'rails_helper'

describe Genre, type: :model do

  context "init without name" do
    it 'fails validations' do
      expect{FactoryGirl.create(:genre_without_name)}.to raise_error(ActiveRecord::RecordInvalid)
    end
  end

  context "init with name" do
    it 'passes validations' do
      expect{FactoryGirl.create(:genre)}.not_to raise_error
    end
  end


  context "init with bad icon char" do
    it 'fails validations' do
      expect{FactoryGirl.create(:genre_with_illlegal_icon)}.to raise_error(ActiveRecord::RecordInvalid)
    end
  end

  context "init with good icon char" do
    it 'passes validations' do
      expect{FactoryGirl.create(:genre_with_legal_icon)}.not_to raise_error

    end
  end

end
