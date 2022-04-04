import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class About extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }
  state = {};
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col sm={3}>
              <h1 className="fw-bolder">About Me</h1>
            </Col>
            <Col sm={9}>
              <p>
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
                expedita, molestias reiciendis libero perferendis sunt porro non
                repellendus corporis eos saepe. Quidem temporibus facere
                tempora, mollitia aliquam ut. Facilis, repellat.Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Ullam expedita,
                molestias reiciendis libero perferendis sunt porro non
                repellendus corporis eos saepe. Quidem temporibus facere
                tempora, mollitia aliquam ut. Facilis, repellat.
              </p>
            </Col>
          </Row>
          <div className="d-flex justify-content-end">
            <button className="btn btn-dark mb-3 ">Resume</button>
          </div>
        </Container>
      </>
    );
  }
}

export default About;
