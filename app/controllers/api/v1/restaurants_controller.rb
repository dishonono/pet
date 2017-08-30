module Api::V1
  class RestaurantsController < APIControllerBase

    before_action :set_restaurant, only: [:show, :edit, :update, :destroy]

    #GET /restaurants
    def index
      @restaurants = Restaurant.all
      render json: @restaurants
    end

    # GET /restaurants/1
    def show
      render json: @restaurant
    end


    # POST /restaurants
    def create
      @restaurant = Restaurant.new(restaurant_params)
      if @restaurant.save
        render json: @restaurant
      else
        render json: {'errors': @restaurant.errors}, status: :unprocessable_entity
      end

    end

    # PATCH/PUT /restaurants/1
    def update
        if @restaurant.update(restaurant_params)
          render json: @restaurant
        else
          render json: {'errors': @restaurant.errors}, status: :unprocessable_entity
        end
    end

    # DELETE /restaurants/1
    def destroy
      @restaurant.destroy
      render json: @restaurant
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_restaurant
        @restaurant = Restaurant.find(params[:id])
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def restaurant_params
        params.require(:restaurant).permit(:name, :genre_id, :rating, :ten_bis, :max_delivey_time, :address, :geo)
      end
  end
end
