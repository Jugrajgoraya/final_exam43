class Api::V1::UsersController < Api::ApplicationController

    def current
        render json: current_user
        puts " user --------- >>>>#{current_user}"
    end
    def create
        user_params = params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
        user = User.new(user_params)
        if user.save
            session[:user_id] = user.id
            render json: { id: user.id }
        else
            render(
                json: { errors: user.errors.messages},
                status: 422 
            )
        end
    end
    def show
        user = User.find params[:id]
        draft_auctions = user.auctions.select{|auc| auc.state == "draft"}
        sold_auctions = user.auctions.select{|auc| auc.state == "reserve_met"}
        render json: {user: user, draft_auctions: draft_auctions, sold_auctions: sold_auctions}
    end

end
