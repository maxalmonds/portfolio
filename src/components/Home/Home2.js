import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Software Engineer who inspired by modern voice UI to create effecive time-saving apps.
              <br />
              <br />
              I’m experienced in
              <i>
                <b className="purple">
                  {" "}
                  Golang, Bash, Python, Node.js, and React JS{" "}
                </b>
              </i>
              — working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}Web Applications and Mobile Apps with{" "}
                  Voice Interface Solutions
                </b>
              </i>
              .
              <br />
              <br />
              Recently I'm experimenting with automation to
              <i>
			    <b className="purple">deploy React.js apps,</b>{" "}
                <b className="purple">create AI-driven workflows,</b> {" "}
                <b className="purple">use Speech-To-Text libraries,</b> {" "}
                <b className="purple">examine llm's output</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
