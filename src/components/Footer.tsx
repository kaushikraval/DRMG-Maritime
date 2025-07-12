import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FooterLogo from "../images/logo.png";
import Facebook from "../images/facebook.svg";
import x from "../images/x.svg";
import linkedin from "../images/linkedin.svg";
import { Link, useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import MapIcon from "../images/map.svg";
import PhoneIcon from "../images/phone.svg";
import MailIcon from "../images/mail.svg";
import btnAarrow from "../images/right-arrow.svg";

const Footer = () => {
  const location = useLocation();
  const [submitted, setSubmitted] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_vbf5jhh",
        "template_erkdjhk",
        form.current,
        "W5d0z3rvJr88fDaJ0"
      )
      .then(
        (result) => {
          setSubmitted(true);
          form.current.reset();
          setTimeout(() => setSubmitted(false), 5000);
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message, please try again later.");
        }
      );
  };

  return (
    <footer>
      <section className="section contact_wrapper bg_gray" id="contact">
        <Container>
          <Row>
            <Col md="4">
              <h2 className="section__title">
                <span>Let's talk</span> about your flyer goals.
              </h2>
              <div className="contact_detail">
                <h6>Contact Us</h6>
                <ul>
                  <li>
                    <img src={MapIcon} alt="" />
                    <span>90 Club Rd, Harrietsfield, NS - B3V 1B6</span>
                  </li>
                  <li>
                    <img src={PhoneIcon} alt="" />
                    <Link to="tel:0123-456-789">0123-456-789</Link>
                  </li>
                  <li>
                    <img src={MailIcon} alt="" />
                    <Link to="mailto:drmgmaritime@gmail.com">
                      drmgmaritime@gmail.com
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="8">
              <div className="contact_form_wrapper">
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col md="6">
                      <input
                        type="text"
                        name="name"
                        className="form-control mb20"
                        placeholder="Enter your name"
                        required
                      />
                    </Col>
                    <Col md="6">
                      <input
                        type="email"
                        name="email"
                        className="form-control mb20"
                        placeholder="Enter your email"
                        required
                      />
                    </Col>
                    <Col md="12">
                      <input
                        type="tel"
                        name="phone"
                        className="form-control mb20"
                        placeholder="Enter your phone number"
                        required
                      />
                    </Col>
                    <Col md="12">
                      <textarea
                        name="message"
                        className="form-control mb20"
                        placeholder="Enter your message"
                        required
                      />
                    </Col>
                  </Row>
                  <div className="text-end">
                    <button className="btn btn__outline" type="submit">
                      Request Callback{" "}
                      <span>
                        <img src={btnAarrow} alt="" />
                      </span>
                    </button>
                  </div>
                  {submitted && (
                    <div className="submit_message">
                      <p>Message sent successfully!</p>
                    </div>
                  )}
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Container>
        <Row className="align-items-center">
          <Col md="8">
            <div className="footer_left">
              <div className="logo">
                <img src={FooterLogo} alt="" />
              </div>
              <ul>
                <li>
                  <Link to="/">Quick Link</Link>
                </li>
                <li>
                  <Link to="/">Services</Link>
                </li>
                <li>
                  <Link to="/">Contact Info</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md="4">
            <div className="footer_social">
              <ul>
                <li>
                  <Link to="/">
                    <img src={Facebook} alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src={x} alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src={linkedin} alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
