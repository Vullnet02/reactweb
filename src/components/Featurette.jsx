import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Featurette = () => {
  return (
    <>
      <hr className="featurette-divider" />

      <Container>
        <Row className="featurette">
          <Col md={7} className="order-md-2">
            <h2 className="featurette-heading">
              Oh yeah, it’s that good.{" "}
              <span className="text-muted">See for yourself.</span>
            </h2>
            <p className="lead">
              Another featurette? Of course. More placeholder content here to
              give you an idea of how this layout would work with some actual
              real-world content in place.
              <br /> <br />
            </p>
          </Col>
          <Col md={5} className="order-md-1">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="https://careerinpharma.com/wp-content/uploads/2022/06/dentis-1-scaled.svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee" />
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
                500x500
              </text>
            </svg>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Featurette;
