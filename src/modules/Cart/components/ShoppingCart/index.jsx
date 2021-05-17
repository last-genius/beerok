import React from "react";

import Card from "../Card";

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          imgurl:
            "https://media.istockphoto.com/photos/glass-of-dark-beer-picture-id910481830?k=6&m=910481830&s=612x612&w=0&h=qy-FCnlabygw3g1J1oQqefofkLAlxIQwNtb7axPAdqk=",
          name: "Half-Baked Supine Spinal Twist Flanders Red Ale",
          description:
            "Fragrant giggle juice like an old cup of office coffee/div",
        },
        {
          imgurl:
            "https://image.freepik.com/free-photo/beer-mug-wooden-table_8119-993.jpg",
          name: "Asian-Spiced Eggbeater Pedal Brown Ale",
          descriptio:
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
            "https://2fdltvvn8wp2rn64ywgk8o17-wpengine.netdna-ssl.com/wp-content/uploads/2015/07/american-brown-ale-style.jpg",
          name: "Grandma's Apple Pie Brake Lever Altbier",
          description:
            "Golden breakfast of champions reminiscent of a wet old box in your grandma's basement",
        },
        {
          imgurl:
            "https://media.istockphoto.com/photos/mug-fresh-beer-with-cap-of-foam-on-black-background-picture-id160895488?k=6&m=160895488&s=612x612&w=0&h=gtPbN7fz3s1dh82SUIxLJVafaFbmBG6mn35RS3k79V8=",
          name: "Deep-Fried Doppelgänger Brown Ale",
          description: "Dank disappointment that demands slow savoring",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <section id="ijk2r" class="flex-sect">
          <div class="container-width">
            <div id="irdvr" class="flex-title">
              Shopping Cart
            </div>
            <div class="cards">
              {this.state.items.map((item) => (
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
              <button class="lead-btn">Confirm order</button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ShoppingCart;
