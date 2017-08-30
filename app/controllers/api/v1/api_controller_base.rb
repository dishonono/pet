module Api::V1

  class APIControllerBase < ApplicationController
    #skip_before_action :verify_authenticity_token
    rescue_from Exception do |exception|
       head :internal_server_error
       Rails.logger.error exception
    end
    rescue_from ActiveRecord::RecordNotFound do |exception|
       head :not_found
    end

  end
 end
