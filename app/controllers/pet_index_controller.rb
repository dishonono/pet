class PetIndexController < ApplicationController
  layout "pet_index"

  def index
    @pet_index_props = { name: "Stranger" }
  end
end
