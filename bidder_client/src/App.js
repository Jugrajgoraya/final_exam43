import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from './components/Welcome';
import { User } from './request';
import NavBar from './components/Navbar';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import AuthRoute from './components/AuthRoute';
import AuctionIndexPage from './components/AuctionIndexPage'
import AuctionNewPage from './components/AuctionNewPage';
import AuctionShowPage from './components/AuctionShowPage';
import UserShowPage from './components/UserShowPage';

const App = () =>{

  const [user, setUser] = useState(null)

  useEffect(()=>{
    getCurrentUser()
  },[])

  const getCurrentUser = ()=>{
    return User.current().then(user =>{
      if(user?.id){
        setUser(user)
        // console.log(user);
      }
    })
  }
  const onSignOut = ()=>{
    setUser(null)
  }

  return (
    <BrowserRouter>
      <NavBar currentUser={user} onSignOut={onSignOut}/>
      <Switch>
        <Route exact path='/sign_in'
          render={(routeProps) => <SignInPage {...routeProps } onSignIn={getCurrentUser} />}
        />
        <Route exact path='/sign_up' 
          render={(routeProps) => <SignUpPage {...routeProps} onSignUp={getCurrentUser} />}
        />
        {/* <AuthRoute isAuthenticated={!!user} exact path='/auctions/new' component={AuctionNewPage}></AuthRoute> */}
        <Route exact path='/auctions/new' component={AuctionNewPage} />
        <Route exact path='/auctions/:id' component={AuctionShowPage} />
        <Route exact path='/auctions' component={AuctionIndexPage}/>
        <Route exact path='/users/:id' component={UserShowPage} />
        <Route component={Welcome} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
