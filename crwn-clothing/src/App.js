import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


import Homepage from './Pages/homePage/homepage.comp'
import ShopPage from './Pages/shopPage/shopPage.comp';
import Header from './Components/Header/Header.comp';
import LoginPage from '../src/Pages/login/Login.comp'

import { auth, createUserProfileDocInDB, AddCollectionAndDocInDB } from './Firebase/Firebase.util'

import { connect } from 'react-redux'
import { setCurrentUser } from './Redux/User/user.action'
import { selectCurrentUser } from './Redux/User/user.selector'
import { createStructuredSelector } from 'reselect'
import { CollectionObjToArray } from './Redux/ShopPage/ShopPage.Collection.Selector'

import './App.css';
import Checkout from './Pages/Checkout/Checkout.page.comp'


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionDataToDB } = this.props
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

      setCurrentUser(userAuth)

      AddCollectionAndDocInDB('collectionKey', collectionDataToDB.map(({ title, items }) => ({ items, title })));

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
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/signin" render={() => this.props.currentUser ? (<Redirect path="/" />) : (<LoginPage />)} />

        </Switch>
      </div >
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
const mapStateToProps = (createStructuredSelector)({
  currentUser: selectCurrentUser,
  collectionDataToDB: CollectionObjToArray
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
