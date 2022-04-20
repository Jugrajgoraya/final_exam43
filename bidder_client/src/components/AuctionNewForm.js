import { useState } from "react";
import '../App.css'

const AuctionNewForm = props => {

    const[title, setTitle] = useState(null)
    const[description, setDescription] = useState(null)
    const[reservePrice, setReservePrice] = useState(null)
    const[endDate, setEndDate] = useState(null)
    const[state, setState] = useState(null)

    const getDataAndSubmit = (event)=>{
        event.preventDefault();
        const params = {
            title: title,
            description: description,
            reserve_price: reservePrice,
            end_date: endDate,
            state: state
        }
        props.submitForm(params)
    }

    return (
        <form className="form" onSubmit={getDataAndSubmit}>
            <div className="title">
                <label htmlFor="title">Title</label>
                <br />
                <input type="text" name="title" id="" onChange={event => {
                    setTitle(event.currentTarget.value)}} 
                />
            </div>
            <div className="description">
                <label htmlFor="description">Description</label>
                <br />
                <input type="text" name="description" id="" onChange={event => {
                    setDescription(event.currentTarget.value)}}
                />
            </div>
            <div className="reserve-price">
                <label htmlFor="reserve_price">Reserve Price</label>
                <br />
                <input type="text" name="reserve_price" id="" onChange={event => {
                    setReservePrice(event.currentTarget.value)}}
                />
            </div>
            <div className="end-date">
                <label htmlFor="end_date">End Date</label>
                <br />
                <input type="date" name="end_date" id="" onChange={event => {
                    setEndDate(event.currentTarget.value)}}
                />
            </div>
            <div className="state">
                <label htmlFor="state">State</label>
                <br />
                <input type="text" name="state" id="" onChange={event => {
                    setState(event.currentTarget.value)}}
                />
            </div>
            <div className="button">
                <input type="submit" value="Create Auction" />
            </div>
        </form>
    )
}
export default AuctionNewForm