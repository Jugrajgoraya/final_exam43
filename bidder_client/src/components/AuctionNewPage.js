import AuctionNewForm from "./AuctionNewForm";
import { Auction } from "../request";

function NewQuestionPage (props){

    const createNewAuction =(params)=>{
        Auction.create(params).then(id => {
            console.log(id);
            this.props.history.push(`/auctions/${id}`)
        })
    }

    return(
        <div>
            <h1 className="header">New Auction Page</h1>
            <AuctionNewForm submitForm = {(params)=>createNewAuction(params)}/>
        </div>
    )
}
export default NewQuestionPage