import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './Pages/homepage/homepage.comp';
import ShopPage from './Pages/shop page/shopPage.comp';
import Header from './Components/Header/Header.comp';
import SignIn from './Components/SignIn/SignIn.Comp';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path="/signin" component={SignIn}></Route>
      </Switch>
    </div>
  );
}

export default App;
