import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import Main from './pages/Main';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Main } />
        <Route path="/Cart" exact component={ CartPage } />
        <Route path="/product-page" exact component={ ProductPage } />
        <Route path="/checkout" exact component={ Checkout } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
