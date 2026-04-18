import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey! I’m <span className="purple">Max Almond</span>{" "}
            from <span className="purple">Yerevan, Armenia</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Software Developer</span> on{" "}
            <span className="purple">edu-tech projects</span>.
            <br />I am experienced in speech-2-text libraries usage with{" "}
            <span className="purple">LiveKit</span>
			<span className="purple">&& ElevenLabs</span>.
            <br />
            <br />
            Right now I'm looking for partnership
            to develop something great for:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Modern Voice Interfaces 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> AI Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> web-browser tinyLLM UI 🎮
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Shaping the future with voice interfaces"{" "}
          </p>
          <footer className="blockquote-footer">Max Almond</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
