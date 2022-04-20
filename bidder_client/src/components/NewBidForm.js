import { useState } from "react";
import { Bid } from "../request";
import '../App.css'

export default function NewBidForm(props){
    const[price, setPrice] = useState(null)

    const handleSubmit =(event)=>{
        event.preventDefault();
        const aId = props.auction_id
        const params = {
            price: price
        }
        Bid.create(params, aId).then(auction =>{
            console.log(auction);
            props.history.push(`/auctions/${auction.id}`)
        })
    }
    return(
        <form className="form"onSubmit={handleSubmit}>
        <div>
            <input type="number" name="price" id="price" onChange={event => {
                setPrice(event.currentTarget.value)
            }}/>
        </div>
        <input type="submit" value="Bid" />
    </form>
    )

}