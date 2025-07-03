
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FooterLogo from "../images/logo.png";
import Facebook from "../images/facebook.svg";
import x from "../images/x.svg";
import linkedin from "../images/linkedin.svg";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      
      <Container>
        <Row className='align-items-center'>
          <Col md="8">
            <div className="footer_left">
              <div className="logo">
                <img src={FooterLogo} alt="" />
              </div>
              <ul>
                <li><Link to="/">Quick Link</Link></li>
                <li><Link to="/">Services</Link></li>
                <li><Link to="/">Contact Info</Link></li>
              </ul>
            </div>
          </Col>
          <Col md="4">
            <div className="footer_social">
              <ul>
                <li><Link to="/"><img src={Facebook} alt="" /></Link></li>
                <li><Link to="/"><img src={x} alt="" /></Link></li>
                <li><Link to="/"><img src={linkedin} alt="" /></Link></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

    </footer>
  );
};

export default Footer;
