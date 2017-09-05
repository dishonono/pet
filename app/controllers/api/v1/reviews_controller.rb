module Api::V1
  class ReviewsController < APIControllerBase
    before_action :set_review, only: [:show, :edit, :update, :destroy]
    before_action :set_restaurant

    # GET /reviews
    def index
      @reviews =  @restaurant.reviews
      render json: @reviews
    end

    # GET /reviews/1
    def show
      render json: @review
    end

    # POST /reviews
    def create
      @review = Review.new(review_params)
      if @review.save
        render json: @review
      else
        render json: {'errors': @review.errors}, status: :unprocessable_entity
      end

    end

    # PATCH/PUT /reviews/1
    def update
        if @review.update(review_params)
          render json: @review
        else
          render json: {'errors': @review.errors}, status: :unprocessable_entity
        end
    end

    # DELETE /reviews/1
    def destroy
      @review.destroy
      render json: @review
    end

    private
      # Use callbacks to share common setup or constraints between actions.

      def set_review
        @restaurant = Restaurant.find(params[:restaurant_id])
      end

      def set_review
        @review = Review.find(params[:id])
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def review_params
        params.require(:review).permit(:name, :icon)
      end
  end
end
