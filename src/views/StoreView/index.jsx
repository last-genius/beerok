import React from "react";

import "../HomeView/homeview.css";
import Header from "../../modules/Home/components/Header";
import Store from "../../modules/Store/components/Store";

const StoreView = () => {
  return (
    <div>
      <Header />
      <Store />
    </div>
  );
};

export default StoreView;
