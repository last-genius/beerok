import React, { useState } from "react";


const Card = (props) => {
  const [amount, updateAmount] = useState(1);

  return (
    <div class="cart-card">
      <img class="cart-img-header" src={props.imgurl}></img>
      <div class="cart-card-body">
        <div id="iz7rt" class="card-title">
          {props.name}
        </div>
        <div class="card-desc">{props.description}</div>
      </div>
      <div class="cart-change">
        {amount} pcs.
        <button class="cart-btn" onClick={() => updateAmount(amount + 1)}>+</button>
        <button class="cart-btn" onClick={() => {if (amount !== 1) {updateAmount((amount - 1))}}}>-</button>
      </div>
    </div>
  );
};

export default Card;
