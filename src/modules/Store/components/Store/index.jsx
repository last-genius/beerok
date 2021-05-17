import React from "react";

import Card from "../Card";

class Store extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
            imgurl: "https://media.istockphoto.com/photos/glass-of-dark-beer-picture-id910481830?k=6&m=910481830&s=612x612&w=0&h=qy-FCnlabygw3g1J1oQqefofkLAlxIQwNtb7axPAdqk=",
            name: "Half-Baked Supine Spinal Twist Flanders Red Ale",
            description: "Fragrant giggle juice like an old cup of office coffee",
      },
          {
            imgurl: "https://image.freepik.com/free-photo/beer-mug-wooden-table_8119-993.jpg",
            name: "Asian-Spiced Eggbeater Pedal Brown Ale",
            description: "Long-tailed bouquet with an 'it's complicated' relationship status",
          },
          {
            imgurl:"https://beerbusinessfinance.com/wp-content/uploads/2020/07/Depositphotos_205388102_s-2019.jpg",
            name: "Aïoli Camel Toe Maibock",
            description:"Velvety hop bouquet like shit and blueberries got together and had a baby",
          },
          {
            imgurl: "https://dogfishalehouse.com/wp-content/uploads/2015/04/brownaleblog.jpg",
            name: "White Pepper Dusted Thunderbolt Dortmunder",
            description: "Cloying flavor with homicidal tendencies",
          },
          {
            imgurl: "https://2fdltvvn8wp2rn64ywgk8o17-wpengine.netdna-ssl.com/wp-content/uploads/2015/07/american-brown-ale-style.jpg",
            name: "Grandma's Apple Pie Brake Lever Altbier",
            description: "Golden breakfast of champions reminiscent of a wet old box in your grandma's basement",
          },
          {
            imgurl:"https://media.istockphoto.com/photos/mug-fresh-beer-with-cap-of-foam-on-black-background-picture-id160895488?k=6&m=160895488&s=612x612&w=0&h=gtPbN7fz3s1dh82SUIxLJVafaFbmBG6mn35RS3k79V8=",
            name:"Deep-Fried Doppelgänger Brown Ale",
            description: "Dank disappointment that demands slow savoring",
      },
      {
            imgurl: "https://image.freepik.com/free-photo/glass-fresh-cold-beer-dark-background_101125-98.jpg",
            name: "Deep-Fried Handlebar Doppelbock",
            description: "Groovy dragon's blood that resembles the musky aroma of a goat",
      },
      {
            imgurl: "https://il8.picdn.net/shutterstock/videos/1225942/thumb/1.jpg",
            name: "Bursting Blackberry Side Plank Imperial Stout",
            description: "Gassy undertones with a medicinal nose",
      },
      {
            imgurl:"https://image.freepik.com/free-photo/beer-mug-beer-dark-background-frosty-glass-light-beer-set_61243-557.jpg",
            name: "Bursting Blackberry Side Plank Imperial Stout",
            description: "Confounding liquid seduction with a british accent",
      },
      {
            imgurl: "https://media.istockphoto.com/photos/glass-of-beer-with-black-background-picture-id1009530630?k=6&m=1009530630&s=170667a&w=0&h=q-nPhx38aRod45n8hVfJzwvL-rAb8EsO0PU5qZCaLBQ=",
            name: "Jalapeño Knobby-Tired Imperial Stout",
            description: "Nuanced flavors with hints of processed meat",
      },
      {
            imgurl: "http://cdn6.dissolve.com/p/D2057_3_013/D2057_3_013_0004_600.jpg",
            name: "Gooseberry Salution Seal Dunkel",
            description: "Delicate mountains of bitterness that conjures fond memories of long summer nights",
      },
          {
            imgurl: "https://ak.picdn.net/shutterstock/videos/32300107/thumb/1.jpg",
            name: "Late Night Cappuccino Downward Dog IPA",
            description: "Opinionated water from chernobyl that's basically soda",
          }
      ],
    };
  }

  render() {
    return (
      <section id="ijk2r" class="flex-sect">
        <div class="container-width">
          <div id="irdvr" class="flex-title">
            Store
            <br />
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
        </div>
      </section>
    );
  }
}

export default Store;
