import React, { useState, setState, handleSubmit } from "react";

import Card from "../Card";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: null,
      email: null,
      address: null,
      errors: {
        fullName: "",
        email: "",
        address: "",
      },
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
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 3
            ? "Full Name must be at least 3 characters long!"
            : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "address":
        errors.address =
          value.length < 3 ? "Address must be at least 3 characters long!" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <section class="flex-sect">
          <div class="container-width">
            <div class="flex-title">Shopping Cart</div>
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
              <form onSubmit={this.handleSubmit} noValidate>
                <div>
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    onChange={this.handleChange}
                    noValidate
                  />
                  {errors.fullName.length > 0 && (
                    <span className="error">{errors.fullName}</span>
                  )}
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    noValidate
                  />
                  {errors.email.length > 0 && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>
                <div>
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    name="address"
                    onChange={this.handleChange}
                    noValidate
                  />
                  {errors.address.length > 0 && (
                    <span className="error">{errors.address}</span>
                  )}
                </div>
                <div
                  className="submit"
                  class="lead-btn"
                  // onClick={() => setState({ items: [] })}
                >
                  <button>Confirm order</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
} 

export default ShoppingCart;
