import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


import Homepage from './Pages/homePage/homepage.comp'
import ShopPage from './Pages/shopPage/shopPage.comp';
import Header from './Components/Header/Header.comp';
import LoginPage from '../src/Pages/login/Login.comp'



import { connect } from 'react-redux'

import { selectCurrentUser } from './Redux/User/user.selector'
import { createStructuredSelector } from 'reselect'

import './App.css';
import Checkout from './Pages/Checkout/Checkout.page.comp'


class App extends React.Component {




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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})


export default connect(mapStateToProps)(App);
