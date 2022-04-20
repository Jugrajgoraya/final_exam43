import '../App.css'
import moment from 'moment';
moment().format();

export default function BidList ({bids}){

    return (
        <ul>
            {
                bids ?
                bids.map((bid,i)=>{
                    return (
                    <li key={i}>   
                        <p>$ {bid.price} offered {moment(bid.created_at).fromNow()}</p>
                    </li>
                    )
                }):
                null
            }
        </ul>
    )
}