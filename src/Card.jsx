import React, { Component } from "react";

class Card extends Component {
  state = {};

  render() {
    let divStyle = {
      width: "20%",
      height: "200px",
      border: "1px solid black",
      color: "white",
      fontSize: "20px",
      cursor: "pointer",
    };

    return (
      <>
        <div
          className="d-flex align-items-center justify-content-center bg-dark"
          style={divStyle}
        >
          <p className=" border-bottom">{this.props.card}</p>
        </div>
      </>
    );
  }
}

export default Card;
