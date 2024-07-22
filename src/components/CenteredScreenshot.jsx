import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CenteredScreenshot = () => {
  return (
    <Container className="px-4 pt-5 my-5 text-center border-bottom">
      <h1 className="display-4 fw-bold">Centered screenshot</h1>
      <Row className="justify-content-center">
        <Col lg={6}>
          <p className="lead mb-4">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <Button variant="primary" size="lg" className="px-4 me-sm-3">
              Primary button
            </Button>
            <Button variant="outline-secondary" size="lg" className="px-4">
              Secondary
            </Button>
          </div>
        </Col>
      </Row>
      <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
        <Container className="px-5">
          <Image
            src="https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-docs.png"
            className="img-fluid border rounded-3 shadow-lg mb-4"
            alt="Example image"
            width="700"
            height="500"
            loading="lazy"
          />
        </Container>
      </div>
    </Container>
  );
};

export default CenteredScreenshot;
