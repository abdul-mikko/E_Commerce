import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth } from './Firebase/Firebase.util'

import Homepage from './Pages/homepage/homepage.comp';
import ShopPage from './Pages/shop page/shopPage.comp';
import Header from './Components/Header/Header.comp';
import SignIn from './Components/SignIn/SignIn.Comp';

import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route exact path="/signin" component={SignIn}></Route>
        </Switch>
      </div >
    );
  }
}

export default App;
