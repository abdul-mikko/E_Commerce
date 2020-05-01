import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocInDB } from './Firebase/Firebase.util'

import Homepage from './Pages/homepage/homepage.comp';
import ShopPage from './Pages/shop page/shopPage.comp';
import Header from './Components/Header/Header.comp';
import LoginPage from '../src/Pages/login/Login.comp'

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRefUID = await createUserProfileDocInDB(userAuth);
        userRefUID.onSnapshot(snap => {
          this.setState({
            currentUser: {
              id: snap.id,
              ...snap.data()
            }
          })
          console.log(this.state)
        })

      }
      else {
        this.setState({ currentUser: userAuth })
      }

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
          <Route exact path="/signin" component={LoginPage}></Route>
        </Switch>
      </div >
    );
  }
}

export default App;
