import React from "react";

import "./homeview.css";
import Content from "../../modules/Home/components/Content";
import HomeHeader from "../../modules/Home/components/HomeHeader";

const HomeView = () => {
  return (
    <div>
      <HomeHeader />
      <Content />
    </div>
  );
};

export default HomeView;
