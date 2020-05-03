import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Homepage from './Pages/homepage/homepage.comp';
import ShopPage from './Pages/shop page/shopPage.comp';
import Header from './Components/Header/Header.comp';
import LoginPage from '../src/Pages/login/Login.comp'

import { auth, createUserProfileDocInDB } from './Firebase/Firebase.util'

import { setCurrentUser } from './Redux/User/user.action'
import { connect } from 'react-redux'

import './App.css';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRefUID = await createUserProfileDocInDB(userAuth);
        userRefUID.onSnapshot(snap => {
          setCurrentUser({
            id: snap.id,
            ...snap.data()

          })

        })

      }
      else {
        setCurrentUser(userAuth)
      }

    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route exact path="/signin" component={LoginPage}></Route>
        </Switch>
      </div >
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
