import React from "react";
import Button from "react-bootstrap/Button";

class HeroSection extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }
  state = {};
  render() {
    return (
      <>
        <div>
          <section id="hero" className="mt-2 ms-2 me-2 mb-5">
            <h1>Nesma Taha</h1>
            <p className="fs-3 fw-bolder fst-italic">
              THINK GLOBALLY, ACT LOCALLY
            </p>
            <Button variant="dark" size="lg" active>
              More Details
            </Button>{" "}
          </section>
        </div>
      </>
    );
  }
}

export default HeroSection;
