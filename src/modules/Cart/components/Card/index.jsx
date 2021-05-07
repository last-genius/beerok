import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div class="cart-card">
        <img class="cart-img-header" src={this.props.imgurl}></img>
        <div class="cart-card-body">
          <div id="iz7rt" class="card-title">
            {this.props.name}
          </div>
          <div class="card-desc">{this.props.description}</div>
        </div>
        <div class="cart-change">
            1 pcs.
          <button class="cart-btn">+</button>
          <button class="cart-btn">-</button>
        </div>
      </div>
    );
  }
}

export default Card;
