import { useState } from "react"
import { Session } from "../request"

export default function SignInPage(props) {

    const {onSignIn} = props

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [errors, setErrors] = useState([])

    const handleSubmit = (event)=>{
        event.preventDefault()
        const params = {
            email: email,
            password: password
        }
        Session.create(params).then(data =>{
            if(data.status === 404){
                setErrors([ ...errors, {message:"wrong email or password"}])
            }else if(data.id){
                onSignIn()
                setErrors([])
                props.history.push("/auctions")
            }
        })
    }

    return(
        <main>
            <h1 className="header">Sign In</h1>
            <form className="form" onSubmit={handleSubmit}>
                {errors.length > 0 ? (
                <div>
                    <h4>Failed to Log In</h4>
                    <p>{errors.map(error => error.message).join(", ")}</p>
                </div>)
                : ""}
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={event => {
                        setEmail(event.currentTarget.value)
                    }}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={event => {
                        setPassword(event.currentTarget.value)
                    }}/>
                </div>
                <input type="submit" value="Sign In" />
            </form>
        </main>
    )
    
}