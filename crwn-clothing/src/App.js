import React from 'react';
import './App.css';
import Homepage from './Pages/homepage/homepage.comp';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './Pages/shop page/shopPage.comp';
import Header from './Components/Header/Header.comp';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
