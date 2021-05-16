import React from "react";

import "../HomeView/homeview.css";
import Header from "../../modules/General/components/Header";
import Contacts from "../../modules/Contact/components/Contacts";

const ContactView = () => {
  return (
    <div>
      <Header includeBanner={false} />
      <Contacts />
    </div>
  );
};

export default ContactView;
