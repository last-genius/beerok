import React from "react";

import "../HomeView/homeview.css";
import Header from "../../modules/General/components/Header";
import Store from "../../modules/Store/components/Store";

const StoreView = () => {
  return (
    <div>
      <Header includeBanner={false} />
      <Store />
    </div>
  );
};

export default StoreView;
