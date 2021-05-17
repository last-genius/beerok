import React from "react";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();

  function navigateToHome() {
    history.push("/");
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
    <header id="iyu4">
      <div id="iuhj" class="container-width">
        <div id="it8f" class="logo-container">
          <a href="./">
            <div id="i2wx" class="logo">
              beerok
            </div>
          </a>
        </div>
        <nav class="menu">
        <button id="icli" class="menu-item" onClick={navigateToCart}>
            CART
          </button>
          <button id="icli" class="menu-item" onClick={navigateToContact}>
            CONTACT
          </button>
          <button id="icli" class="menu-item" onClick={navigateToStore}>
            STORE
          </button>
          <button id="icli" class="menu-item" onClick={navigateToHome}>
            HOME
          </button>
        </nav>
        <div class="clearfix"></div>
        {includeBanner && (
          <div>
            <div id="i6ybh" class="sub-lead-title">
              We value your beer - and let you choose freely out of many
              hand-picked brands
              <br />
            </div>
            <a href="./store">
              <div id="ihsv9" class="lead-btn">
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
