import React, { Component } from "react";

class FooterSection extends Component {
  state = {};
  render() {
    return (
      <>
        <div
          style={{ height: "80px", backgroundColor: "#555" }}
          className="d-flex justify-content-between text-light align-items-center bg-dark"
        >
          <div className="p-2 col-3">
            <h5>Contacts</h5>

            <i className="fa fa-facebook-official m-1" aria-hidden="true" />
            <i className="fa fa-linkedin-square m-1" aria-hidden="true" />
            <i className="fa fa-twitter m-1" aria-hidden="true" />
          </div>
          <div className="col-3 m-3">
            <button className="btn btn-outline-light">Click to Connect</button>
          </div>
          <div className="col-3">
            <h5>Author: NesMa TaHa</h5>
          </div>
        </div>
      </>
    );
  }
}

export default FooterSection;
