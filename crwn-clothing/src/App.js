import React from 'react';
import './App.css';
import Homepage from './Pages/homepage.comp';
import { Route } from 'react-router-dom';

function HatsPage() {
  return (
    <h1>HATS PAGE</h1>
  )
}

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage}></Route>
      <Route path="/shop/hats" component={HatsPage}></Route>
    </div>
  );
}

export default App;
