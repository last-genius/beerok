import React from "react";

import "../HomeView/homeview.css";
import Header from "../../modules/Home/components/Header";
import Contacts from "../../modules/Contact/components/Contacts";

const ContactView = () => {
  return (
    <div>
      <Header />
      <Contacts />
    </div>
  );
};

export default ContactView;
