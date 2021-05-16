import React from "react";

import "../HomeView/homeview.css";
import Header from "../../modules/General/components/Header";
import Cart from "../../modules/Cart/components/Cart";

const CartView = () => {
  return (
    <div>
      <Header includeBanner={false} />
      <Cart />
    </div>
  );
};

export default CartView;
