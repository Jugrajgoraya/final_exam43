import { Auction } from "../request";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import moment from 'moment';
moment().format();

export default function AuctionIndexPage() {

    const [auctions, setAuctions] = useState([])

    useEffect(()=>{
        Auction.all().then(fetchedAuctions =>{
            setAuctions(fetchedAuctions)
            // console.log(`auctions => ${fetchedAuctions}`);
        })
    },[])

    return(
        <div>
            <h1 className="header">Auctions</h1>
            <ul>
                {
                    auctions.map((auc, i) => {
                        return <li key={i}>
                                <Link className="ul-link" to={`auctions/${auc.id}`} >{auc.title}</Link>
                                <p>Posted {moment(auc.created_at).fromNow()}</p>
                            </li>
                    })
                }
            </ul>
        </div>
    )
}