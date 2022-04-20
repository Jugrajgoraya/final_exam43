import { NavLink } from 'react-router-dom';
import { Session } from '../request.js';
import logo from '../logo.jpeg'
import '../App.css'

const NavBar = ({ currentUser,onSignOut }) => {

    const handleSignOut = ()=>{
        Session.destroy().then(()=>{
            onSignOut()
        })
    }
    return(
        <nav className='nav'>
            <img className='img' src={logo} alt="Logo" />
            <div className='nav-right'>
                <div className='nav-right1'>
                    <NavLink className="link" to='/auctions'>Auction Index</NavLink>
                </div>
            {
                currentUser ? (
                    <div className='nav-right2'>
                        <NavLink className="link" to='/auctions/new'>New Auction</NavLink>
                        <NavLink className="user-name" to={`/users/${currentUser.id}`} >Welcome { currentUser.first_name }</NavLink>
                        
                        <button className="sign-out" onClick={handleSignOut}>Sign Out</button>
                    </div>
                ) : (
                    <div className='nav-right2'>
                        <NavLink className="nav-button" to='/sign_in'>Sign In</NavLink>
                        <NavLink className="nav-button" to='/sign_up'>Sign UP</NavLink>
                    </div>
                    )
                }
            </div>
        </nav>
    )
}

export default NavBar;

