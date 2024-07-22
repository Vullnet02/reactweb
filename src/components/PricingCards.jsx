import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const PricingCards = () => {
  return (
    <Container className="mb-3 text-center">
      <Row className="row-cols-1 row-cols-md-3">
        <Col>
          <Card className="mb-4 rounded-3 shadow-sm">
            <Card.Header className="py-3">
              <h4 className="my-0 fw-normal">Basic</h4>
            </Card.Header>
            <Card.Body>
              <Card.Title className="pricing-card-title">
                $0<small className="text-muted fw-light">/mo</small>
              </Card.Title>
              <ul className="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <Button variant="outline-danger" size="lg" className="w-100">
                Sign up for free
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-4 rounded-3 shadow-sm">
            <Card.Header className="py-3">
              <h4 className="my-0 fw-normal">Medium</h4>
            </Card.Header>
            <Card.Body>
              <Card.Title className="pricing-card-title">
                $15<small className="text-muted fw-light">/mo</small>
              </Card.Title>
              <ul className="list-unstyled mt-3 mb-4">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <Button variant="primary" size="lg" className="w-100">
                Get started
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-4 rounded-3 shadow-sm border-primary">
            <Card.Header className="py-3 text-white bg-primary border-primary">
              <h4 className="my-0 fw-normal">Pro</h4>
            </Card.Header>
            <Card.Body>
              <Card.Title className="pricing-card-title">
                $29<small className="text-muted fw-light">/mo</small>
              </Card.Title>
              <ul className="list-unstyled mt-3 mb-4">
                <li>30 users included</li>
                <li>15 GB of storage</li>
                <li>Phone and email support</li>
                <li>Help center access</li>
              </ul>
              <Button variant="primary" size="lg" className="w-100">
                Contact us
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PricingCards;
