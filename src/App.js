import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";

//Import Pages
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </Switch>
  );
}

export default App;
