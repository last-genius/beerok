import React from "react";

import "./homeview.css";
import Content from "../../modules/Home/components/Content";
import Header from "../../modules/General/components/Header";

const HomeView = () => {
  return (
    <div>
      <Header includeBanner={true} />
      <Content />
    </div>
  );
};

export default HomeView;
