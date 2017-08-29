module Api::V1
  class RestaurantsController < ApplicationController

    #GET /restaurants
    def index
      @restaurants = Restaurant.all
      respond_to do |format|
        format.json { render json: @restaurants.to_json }
      end
    end


    # POST /restaurants
    def create
      @restaurant = Restaurant.new(restaurant_params)

      respond_to do |format|
        if @restaurant.save
          format.json { render :show, status: :created, location: @restaurant }
        else
          format.json { render json: @restaurant.errors, status: :unprocessable_entity }
        end
      end
    end

    # PATCH/PUT /restaurants/1
    def update
      respond_to do |format|
        if @restaurant.update(restaurant_params)
          format.json { render :show, status: :ok, location: @restaurant }
        else
          format.json { render json: @restaurant.errors, status: :unprocessable_entity }
        end
      end
    end

    # DELETE /restaurants/1
    def destroy
      @restaurant.destroy
      respond_to do |format|
         format.json { head :no_content }
      end
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      # Never trust parameters from the scary internet, only allow the white list through.
      def restaurant_params
        params.require(:restaurant).permit(:name, :genre_id, :rating, :ten_bis, :max_delivey_time, :address, :geo)
      end
  end
end
