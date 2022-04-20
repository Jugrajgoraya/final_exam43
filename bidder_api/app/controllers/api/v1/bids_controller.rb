class Api::V1::BidsController < Api::ApplicationController

    before_action :authenticate_user!

    def create
        bid = Bid.new params.require(:bid).permit(:price)
        auction = Auction.find params[:auction_id]
        bid.auction = auction
        bid.user = current_user
        if bid.save
            if bid.price > auction.reserve_price
                auction.update(state: "reserve_met")
                render( json: {id: auction.id} )
            else
                render( json: {id: auction.id} )
            end
        else
            render( json: { status:500 } )
        end
    end
end
