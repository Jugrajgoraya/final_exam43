import { useState } from "react"
import { User } from "../request"


export default function SignUpPage(props) {
    
    const {onSignUp} = props

    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [passwordConfirmation, setPasswordConfirmation] = useState(null)
    const [errors, setErrors] = useState([])

    const handleSubmit = (event)=>{
        event.preventDefault()
        const params = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            passwordConfirmation: passwordConfirmation
        } 
        User.create(params).then(user=>{
            if(user.status === 404){
                setErrors([ ...errors, {message:"wrong input"}])
            }else if(user.id){
                onSignUp()
                props.history.push("/auctions")
            }
        })
    }

    return(
        <main>
            <h1 className="header">Sign Up</h1>
            <form className="form" onSubmit={handleSubmit}>
                {errors.length > 0 ? (
                <div>
                    <h4>Failed to Log In</h4>
                    <p>{errors.map(error => error.message).join(", ")}</p>
                </div>)
                : ""}
                <div>
                    <label htmlFor="first_name">First name</label>
                    <input type="text" name="first_name" id="first_name" onChange={event => {
                        setFirstName(event.currentTarget.value)}}
                    />
                </div>
                <div>
                    <label htmlFor="last_name">Last name</label>
                    <input type="text" name="last_name" id="last_name" onChange={event => {
                        setLastName(event.currentTarget.value)}}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" onChange={event => {
                        setEmail(event.currentTarget.value)}}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" onChange={event => {
                        setPassword(event.currentTarget.value)}}
                    />
                </div>
                <div>
                    <label htmlFor="password_confirmation">Password</label>
                    <input type="text" name="password_confirmation" id="password_confirmation" onChange={event => {
                        setPasswordConfirmation(event.currentTarget.value)}}
                    />
                </div>
                <input type="submit" value="Sign Up" />
            </form>
        </main>
    )
}