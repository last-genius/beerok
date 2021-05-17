import React, { useState } from "react";

import Card from "../Card";

const state = {
  items: [
    {
      imgurl:
        "https://media.istockphoto.com/photos/glass-of-dark-beer-picture-id910481830?k=6&m=910481830&s=612x612&w=0&h=qy-FCnlabygw3g1J1oQqefofkLAlxIQwNtb7axPAdqk=",
      name: "Half-Baked Supine Spinal Twist Flanders Red Ale",
      description: "Fragrant giggle juice like an old cup of office coffee/div",
    },
    {
      imgurl:
        "https://image.freepik.com/free-photo/beer-mug-wooden-table_8119-993.jpg",
      name: "Asian-Spiced Eggbeater Pedal Brown Ale",
      description:
        "Long-tailed bouquet with an 'it's complicated' relationship status",
    },
    {
      imgurl:
        "https://beerbusinessfinance.com/wp-content/uploads/2020/07/Depositphotos_205388102_s-2019.jpg",
      name: "Aïoli Camel Toe Maibock",
      description:
        "Velvety hop bouquet like shit and blueberries got together and had a baby",
    },
    {
      imgurl:
        "https://dogfishalehouse.com/wp-content/uploads/2015/04/brownaleblog.jpg",
      name: "White Pepper Dusted Thunderbolt Dortmunder",
      description: "Cloying flavor with homicidal tendencies",
    },
    {
      imgurl:
        "https://media.istockphoto.com/photos/mug-fresh-beer-with-cap-of-foam-on-black-background-picture-id160895488?k=6&m=160895488&s=612x612&w=0&h=gtPbN7fz3s1dh82SUIxLJVafaFbmBG6mn35RS3k79V8=",
      name: "Deep-Fried Doppelgänger Brown Ale",
      description: "Dank disappointment that demands slow savoring",
    },
  ],
};

const ShoppingCart = () => {
  const [items, updateState] = useState(state);

  return (
    <div>
      <section id="ijk2r" class="flex-sect">
        <div class="container-width">
          <div id="irdvr" class="flex-title">
            Shopping Cart
          </div>
          <div class="cards">
            {items.items.map((item) => (
              <Card
                imgurl={item.imgurl}
                name={item.name}
                description={item.description}
              />
            ))}
          </div>
          <div class="cartorder">
            <div>
              <label> Address:</label>
              <input placeholder="Type your delivery address here"></input>
            </div>
            <div>
              <label> Email:</label>
              <input placeholder="Type your email address here"></input>
            </div>
            <button class="lead-btn" onClick={() => updateState({items: []})}>
              Confirm order
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShoppingCart;
