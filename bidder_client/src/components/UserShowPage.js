import { useState, useEffect } from "react";
import { Auction, User } from "../request";
import { Link } from 'react-router-dom';
import '../App.css'
import moment from 'moment';
moment().format();

export default function AuctionShowPage(props) {
    
    const [user, setUser] = useState(null)
    const [drafts, setDrafts] = useState(null)
    const [sold, setSold] = useState(null)

    const changeState = (aucId)=>{
        const draft = drafts.find(draft=>{
            return draft.id == aucId 
        })
        console.log(draft);
        const params = {
            title: draft.title,
            description: draft.description,
            reserve_price: draft.reserve_price,
            end_date: draft.end_date,
            state: "published",
            bids: draft.bids
        }
        Auction.update(params, aucId).then(fetchedId =>{
            const newDrafts = drafts.filter(draft =>{
                return draft.id != fetchedId
            })
            setDrafts(newDrafts)
        })

    }
    useEffect(()=>{
        User.show(props.match.params.id).then(data =>{
            console.log(data);
            setUser(data.user)
            setDrafts(data.draft_auctions)
            setSold(data.sold_auctions)
        })
    },[])

    return (
        <div>
            <h1 className="header">User Show Page</h1>
            <div className="user-show">
                <ul className="drafts">
                    <h2>Drafts</h2>
                    {   drafts ? 
                        (
                        drafts.map((auc, i) => {
                            return <li key={i}>
                                    <Link className="ul-link" to={`auctions/${auc.id}`} >{auc.title}</Link>
                                    <button onClick={()=>changeState(auc.id)}>Publish</button>
                                    <p>Posted {moment(auc.created_at).fromNow()}</p>
                                </li>
                        }))
                        :
                        <div>No Drats</div>
                    }
                </ul>
                <ul className="sold">
                    <h2>Sold</h2>
                    {   sold 
                        ? 
                        (
                        sold.map((auc, i) => {
                            return <li key={i}>
                                    <Link className="ul-link" to={`auctions/${auc.id}`} >{auc.title}</Link>
                                    <p>Posted {moment(auc.created_at).fromNow()}</p>
                                </li>
                        }))
                        : 
                        <div>No Sold Auctions</div>
                    }
                </ul>
            </div>

        </div>
    )

}