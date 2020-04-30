import React from 'react';
import './App.css';
import Homepage from './Pages/homepage/homepage.comp';
import { Route } from 'react-router-dom';
import ShopPage from './Pages/shop page/shopPage.comp';


function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage}></Route>
      <Route exact path="/shop" component={ShopPage}></Route>
    </div>
  );
}

export default App;
