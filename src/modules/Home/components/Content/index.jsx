import React from "react";

import Card from "../../../Store/components/Card";

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          imgurl:
            "https://media.istockphoto.com/photos/glass-of-dark-beer-picture-id910481830?k=6&m=910481830&s=612x612&w=0&h=qy-FCnlabygw3g1J1oQqefofkLAlxIQwNtb7axPAdqk=",
          name: "Half-Baked Supine Spinal Twist Flanders Red Ale",
          description: "Fragrant giggle juice like an old cup of office coffee",
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
        <section class="flex-sect">
          <div class="container-width">
            <div class="flex-title">
              Our Best Beers
              <br />
            </div>
            <div class="flex-desc">
              Tasty and different, all at one touch of your fingertips away
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
        <section class="blk-sect">
          <div class="container-width">
            <div class="blk-title">
              beerok Subscriptions
              <br />
            </div>
            <div class="blk-desc">
              Subscribe to our club and get beer every month
              <br />
            </div>
            <div class="price-cards">
              <div class="price-card-cont">
                <div class="price-card">
                  <div class="pc-title">
                    Private Beer
                    <br />
                  </div>
                  <div class="pc-desc">
                    If you want to get a taste
                    <br />
                  </div>
                  <div class="pc-feature odd-feat">
                    + Hand-picked beer selections each month
                    <br />
                  </div>
                  <div class="pc-feature">
                    + 6 litres of the best beer per month
                  </div>
                  <div class="pc-feature">
                    + Stories of how the beer was made
                    <br />
                  </div>
                  <div class="pc-amount odd-feat">
                    $ 29,90/mo
                  </div>
                </div>
              </div>
              <div class="price-card-cont">
                <div class="price-card pc-regular">
                  <div class="pc-title">
                    Lieutenant Beer
                    <br />
                  </div>
                  <div class="pc-desc">
                    Start getting serious
                    <br />
                  </div>
                  <div class="pc-feature odd-feat">
                    + Hand-picked beer selections each month
                    <br />
                  </div>
                  <div class="pc-feature odd-feat">
                    + 25% discount on all of our selection
                    <br />
                  </div>
                  <div class="pc-feature">
                    + 12 litres of the best beer per month
                    <br />
                  </div>
                  <div class="pc-feature">
                    + Stories of how the beer was made
                    <br />
                  </div>
                  <div class="pc-amount odd-feat">
                    $ 49,90/mo
                  </div>
                </div>
              </div>
              <div class="price-card-cont">
                <div class="price-card pc-enterprise">
                  <div class="pc-title">
                    General Beer
                    <br />
                  </div>
                  <div class="pc-desc">
                    Be THE Beer guy
                    <br />
                  </div>
                  <div class="pc-feature odd-feat">
                    + Hand-picked beer selections each month
                    <br />
                  </div>
                  <div class="pc-feature odd-feat">
                    + 25% discount on all of our selection
                    <br />
                  </div>
                  <div class="pc-feature">
                    + 18 litres of the best beer per month
                  </div>
                  <div class="pc-feature odd-feat">
                    + Some of the best snacks
                    <br />
                  </div>
                  <div class="pc-feature">
                    + Stories of how the beer was made
                    <br />
                  </div>
                  <div class="pc-amount odd-feat">
                    $ 69,90/mo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="bdg-sect">
          <div class="container-width">
            <h1 class="bdg-title">
              What people say
              <br />
            </h1>
            <div  class="badges">
              <div class="badge">
                <div class="badge-header"></div>
                <img
                  src="https://thispersondoesnotexist.com/image"
                  class="badge-avatar"
                />
                <div class="badge-body">
                  <div class="badge-name">Adam Smith</div>
                  <div class="badge-role">CEO</div>
                  <div class="badge-desc">
                    I f%$#@g love beer and beerok loves beer too. What more do
                    you need?
                    <br />
                  </div>
                </div>
              </div>
              <div class="badge">
                <div class="badge-header"></div>
                <img
                  src="https://thispersondoesnotexist.com/image?3"
                  class="badge-avatar"
                />
                <div class="badge-body">
                  <div class="badge-name">John Black</div>
                  <div class="badge-role">Software Engineer</div>
                  <div class="badge-desc">
                    I&#039;ve always been a fan of beer, drinking a little here
                    and there, you know? It wasn&#039;t serious until I met
                    beerok, and wow, these guys changed my world!
                    <br />
                  </div>
                </div>
              </div>
              <div class="badge">
                <div class="badge-header"></div>
                <img
                  src="https://thispersondoesnotexist.com/image?2"
                  class="badge-avatar"
                />
                <div class="badge-body">
                  <div class="badge-name">Jessica White</div>
                  <div class="badge-role">Web Designer</div>
                  <div class="badge-desc">
                    Don&#039;t listen to them if they tell you beer is boring!
                    It has never been more fun than with hand-picked monthly
                    beerok selections!
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Content;
