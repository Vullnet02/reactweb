import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-4 bg-primary border-top">
      <Container id="footi">
        <Row className="align-items-center">
          <Col md={4} className="d-flex align-items-center">
            <img
              src="https://www.freepnglogos.com/uploads/logo-chatgpt-png/black-chatgpt-logo-circle-symbol-black-png-0.png"
              alt="Logo"
              width="75"
              height="42"
              className="me-2"
            />
            <span>&copy; 2024 Company, Inc. All rights reserved.</span>
          </Col>
          <Col md={4} className="text-center">
            <p>Email: contact@company.com</p>
            <p>Phone: +123456789</p>
          </Col>
          <Col md={4} className="d-flex justify-content-end">
            <a href="https://facebook.com" className="text-dark me-3">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com" className="text-dark me-3">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" className="text-dark">
              <FaLinkedin size={24} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
