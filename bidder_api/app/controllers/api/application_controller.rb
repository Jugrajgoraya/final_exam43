class Api::ApplicationController < ApplicationController

    skip_before_action :verify_authenticity_token


    private

    def authenticate_user!
        unless current_user.present?
            render(json:{status: 401})
        end
    end

    def current_user
        @current_user ||= User.find_by_id session[:user_id]
    end
    helper_method :current_user
end
