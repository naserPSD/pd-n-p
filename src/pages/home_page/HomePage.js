import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import Typing from "./Typing";
import Tilt from "react-parallax-tilt";
import AboutmeContainer from "../../components/aboutme/aboutmeContainer";
import Fade from "react-reveal/Fade";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF, FaGoogle } from "react-icons/fa";
import Certification from "../../components/certificate/Certification";
import Projects from "../../components/projects/Projects";
import Contactus from "../../components/contactus/Contactus";
import { Link } from 'react-router-dom';
// import Ranking from "../../components/ranking/Ranking";
import { CgMail } from "react-icons/cg";
import { DiFirebase } from "react-icons/di";

export default function Home() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h1
                style={{ paddingBottom: 15, fontSize: "175px" }}
                className="heading"
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> MD NASER BIN HOSSAIN</strong>
              </h1>

              <div className="typing-homeclass">
                <Typing />
              </div>
              <div className="sociallink-home">
                <ul className="homeaboutsociallinks">
                {/* <Link to="/ranking"> */}
      {/* <li className="socialicons">
        <a
          href="https://console.firebase.google.com/?_gl=1*zb5062*_ga*NjQzNzA1ODkzLjE3MDMzOTkwODY.*_ga_CW55HF8NVT*MTcwNDE4NzMyNC4xNy4xLjE3MDQxODczMzIuNTIuMC4w"
          target="_blank"
          rel="noreferrer"
          className="iconcolour homesocialicons"
        >
         <DiFirebase />
        </a>
      </li>
      <li className="socialicons">
        <a
          href="https://console.firebase.google.com/"
          rel="noreferrer"
          className="iconcolour homesocialicons"
        >
         <DiFirebase />
        </a>
      </li> */}
    {/* </Link> */}
    
                  <li className="socialicons">
                    <a
                      href="https://github.com/naserPSD"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour  homesocialicons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href="https://www.linkedin.com/in/md-naser-bin-hossain-9712b7285/"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour  homesocialicons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href="https://mail.google.com/mail/u/0/#inbox"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour  homesocialicons"
                    >
                      <CgMail />
                    </a>
                  </li>
                  
                </ul>
              </div>
            </Col>
            <Col md={4} style={{ paddingBottom: 20 }}>
              <div className="img-home-main">
                <Tilt>
                  <Fade cascade>
                    <img
                      src="./profile.png"
                      alt="home pic"
                      className="img-fluid"
                    />
                  </Fade>
                </Tilt>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <AboutmeContainer />
      <Certification />
      <Projects />
      <Contactus />
    </section>
  );
}
