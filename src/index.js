import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
// import StoreView from "./views/StoreView";
// import ContactView from "./views/ContactView";
// import CartView from "./views/CartView";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/">
          <HomeView />
        </Route>
        <Route path="/home">
          <HomeView />
        </Route>
        {/* <Route path="/store">
          <StoreView />
        </Route>
        <Route path="/contact">
          <ContactView />
        </Route>
        <Route path="/cart">
          <CartView />
        </Route> */}
      </Switch>
    </Router>
  </React.StrictMode>,
  // eslint-disable-next-line no-undef
  document.getElementById("root")
);
