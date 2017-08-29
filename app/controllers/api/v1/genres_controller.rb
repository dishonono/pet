module Api::V1
  class GenresController < ApplicationController

    # GET /genres
    def index
      @genres = Genre.all
      respond_to do |format|
        format.json { render json: @genres.to_json }
      end
    end

    # POST /genres
    def create
      @genre = Genre.new(genre_params)
      respond_to do |format|
        if @genre.save
           format.json { render :show, status: :created, location: @genre }
        else
           format.json { render json: @genre.errors, status: :unprocessable_entity }
        end
      end
    end

    # PATCH/PUT /genres/1
    def update
      respond_to do |format|
        if @genre.update(genre_params)
          format.json { render :show, status: :ok, location: @genre }
        else
          format.json { render json: @genre.errors, status: :unprocessable_entity }
        end
      end
    end

    # DELETE /genres/1
    # DELETE /genres/1.json
    def destroy
      @genre.destroy
      respond_to do |format|
         format.json { head :no_content }
      end
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      # Never trust parameters from the scary internet, only allow the white list through.
      def genre_params
        params.require(:genre).permit(:name, :icon)
      end
  end
end