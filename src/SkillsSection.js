import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ProgressBar from "./ProgressBar";

class Skills extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Container className="bg-dark">
          <Row>
            <div className="text-center">
              <h1 className="text-center text-light">Skills</h1>
              <p className="text-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
                expedita, molestias reiciendis libero perferendis sunt porro non
                repellendus corporis eos saepe Quidem temporibus facere tempora,
                mollitia aliquam ut vQuidem temporibus facere tempora
              </p>
            </div>
          </Row>
          <Row>
            <Col sm={6}>
              <h4 className="text-light text-center">My Progress</h4>
              <hr className="text-light"></hr>
              <ul className="list-unstyled">
                <li className="text-light text-center">UI/UX dESIGN</li>
                <li className="text-light text-center">Responsive Design</li>
                <li className="text-light text-center">Web Design</li>
                <li className="text-light text-center">Mobile App Design</li>
              </ul>
            </Col>
            <Col sm={6} className="mt-1 text-center">
              <ProgressBar newName="Html" newValue="100" />
              <ProgressBar newName="Css" newValue="80" />
              <ProgressBar newName="JavaScript" newValue="70" />
              <ProgressBar newName="Angular" newValue="80" />
              <ProgressBar newName="React" newValue="60" />
              <ProgressBar newName="Node" newValue="70" />
              <ProgressBar newName="Mongo" newValue="70" />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Skills;
