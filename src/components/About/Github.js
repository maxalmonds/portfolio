import React from "react";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Consulting Services <strong className="purple">Stack</strong>
      </h1>
          <ul>
            <li className="about-activity">
              backend development (Golang, Python)
            </li>
            <li className="about-activity">
              cicd automation (Gitlab, Jenkins, GH)
            </li>
            <li className="about-activity">
              containers management (docker, k8s)
            </li>
            <li className="about-activity">
              cloud-ops (AWS, Google Cloud)
            </li>
            <li className="about-activity">
              LLM-ops (speech-2-text, text-2-speech)
            </li>				
          </ul>
    </Row>
  );
}

export default Github;
