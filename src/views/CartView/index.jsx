import React from "react";

import "../HomeView/homeview.css";
import Header from "../../modules/Home/components/Header";
import Cart from "../../modules/Cart/components/Cart";

const CartView = () => {
  return (
    <div>
      <Header />
      <Cart />
    </div>
  );
};

export default CartView;
