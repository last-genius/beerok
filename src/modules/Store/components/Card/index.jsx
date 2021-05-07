import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div class="card">
        <img class="img-header" src={this.props.imgurl}></img>
        <div class="card-body">
          <div id="iz7rt" class="card-title">
            {this.props.name}
          </div>
          <div class="card-desc">{this.props.description}</div>
        </div>
      </div>
    );
  }
}

export default Card;
