require 'rails_helper'

describe Genre, type: :model do

  context "init without name" do
    it 'fails validations' do
      expect{FactoryGirl.create(:genre)}.to raise_error(ActiveRecord::RecordInvalid)
    end
  end

  context "init with name" do
    it 'passes validations' do
      expect{FactoryGirl.create(:genre, name:"miaow")}.not_to raise_error
    end
  end


  context "init with bad icon char" do
    it 'fails validations' do
      expect{FactoryGirl.create(:genre, name:"miaow", icon:"aa")}.to raise_error(ActiveRecord::RecordInvalid)
    end
  end

  context "init with good icon char" do
    it 'passes validations' do
      expect{FactoryGirl.create(:genre, name:"miaow", icon:"a")}.not_to raise_error

    end
  end

end
