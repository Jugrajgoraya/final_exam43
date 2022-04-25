class Api::V1::AuctionsController < Api::ApplicationController

    before_action :find_auction, only: [:show, :update, :destroy]
    before_action :authenticate_user!, except: [:index, :show]

    def create
        auction = Auction.new auction_params
        auction.user = current_user
        if auction.save
          render json: { id: auction.id }
        else
          render(
              json: { errors: auction.errors.messages },
              status: 422
          )
        end
    end
    def index
        allAuctions = Auction.order(created_at: :desc)
        auctions = allAuctions.select{|auc|  auc.state == "published"}
        render(json: auctions, each_serializer: AuctionCollectionSerializer)
    end
    def show
        bids = @auction.bids
        render(json: {auction: @auction, bids: bids})
    end
    def update
        if @auction.update(auction_params)
            render json: {id: @auction.id }
        else
            render(
                json: { errors: @auction.errors.messages },
                status: 422
            )
        end
    end

    private

    def auction_params
        params.require(:auction).permit(:title, :description, :end_date, :reserve_price, :state,:bids)
    end
    def find_auction
        @auction = Auction.find(params[:id])
    end
end
