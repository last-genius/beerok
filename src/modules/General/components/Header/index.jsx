import React from "react";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();

  function navigateToHome() {
    history.replace("/");
  }

  function navigateToStore() {
    history.push("/store");
  }

  function navigateToCart() {
    history.push("/cart");
  }

  function navigateToContact() {
    history.push("/contact");
  }

  const includeBanner = props.includeBanner;
  return (
    <header class="header">
      <div class="container-width">
        <div class="logo-container">
          <button class="button logo" onClick={navigateToHome}>
              beerok
          </button>
        </div>
        <nav class="menu">
        <button class="menu-item" onClick={navigateToCart}>
            CART
          </button>
          <button class="menu-item" onClick={navigateToContact}>
            CONTACT
          </button>
          <button class="menu-item" onClick={navigateToStore}>
            STORE
          </button>
          <button class="menu-item" onClick={navigateToHome}>
            HOME
          </button>
        </nav>
        <div class="clearfix"></div>
        {includeBanner && (
          <div>
            <div class="title sub-lead-title">
              We value your beer - and let you choose freely out of many
              hand-picked brands
              <br />
            </div>
            <a href="./store">
              <div class="lead-btn">
                Store
              </div>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
