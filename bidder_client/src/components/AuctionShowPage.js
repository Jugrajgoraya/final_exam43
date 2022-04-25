import { useEffect, useState } from "react";
import { Auction } from "../request";
import BidList from "./BidList";
import NewBidForm from './NewBidForm'
import "../App.css"

export default function AuctionShowPage(props) {
    
    const [auction, setAuction] = useState(null)
    const [bids, setBids] = useState([])

    useEffect(()=>{
        Auction.show(props.match.params.id).then(data =>{
            setAuction(data)
            console.log(auction);
        })
    },[])

    return auction ? (
        <div>
            <div className="auction-show">
                <div>
                    <h2>{auction.title}</h2>
                    <p>
                        {auction.description}
                    </p>
                </div>
                <div>
                    <p>{auction.reserve_price}</p>
                    <p>{auction.end_date}</p>
                </div>
            </div>
            <div className="bid">
                <NewBidForm auction_id ={props.match.params.id}/>  
                <h3>Previous Bids</h3>
                <BidList className="bid-list" bids={auction.bids}/>
            </div>
        </div>

    ):""

}