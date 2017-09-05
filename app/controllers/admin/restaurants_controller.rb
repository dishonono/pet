module Admin
  class RestaurantsController < ApplicationController
    before_action :set_restaurant, only: [:show, :edit, :update, :destroy]

    # GET /restaurants
    def index
      @restaurants = Restaurant.all
    end

    # GET /restaurants/1
    def show
    end

    # GET /restaurants/new
    def new
      @restaurant = Restaurant.new
    end

    # GET /restaurants/1/edit
    def edit
    end

    # POST /restaurants
    def create
      @restaurant = Restaurant.new(restaurant_params)

      respond_to do |format|
        if @restaurant.save
          format.html { redirect_to admin_restaurant_path(@restaurant), notice: 'Restaurant was successfully created.' }
         else
          format.html { render :new }
         end
      end
    end

    # PATCH/PUT /restaurants/1
    def update
      respond_to do |format|
        if @restaurant.update(restaurant_params)
          format.html { redirect_to admin_restaurant_path(@restaurant), notice: 'Restaurant was successfully updated.' }
        else
          format.html { render :edit }
         end
      end
    end

    # DELETE /restaurants/1
    def destroy
      @restaurant.destroy
      respond_to do |format|
        format.html { redirect_to admin_restaurants_url, notice: 'Restaurant was successfully destroyed.' }
      end
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
