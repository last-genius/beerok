import React from "react";

const Header = (props) => {
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
          <div id="ichm" class="menu-item">
            <a href="./cart">CART</a>
          </div>
          <div id="iokd" class="menu-item">
            <a href="./contact">CONTACT</a>
          </div>
          <div id="icli" class="menu-item">
            <a href="./store">STORE</a>
          </div>
          <div id="iaur4l" class="menu-item">
            <a href="./">HOME</a>
          </div>
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
