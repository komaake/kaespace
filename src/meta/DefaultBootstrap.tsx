import React from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";

export default function DeafultBootstrap() {
  return (
    <Container className="p-4">
      <Row>
        <Col>
          <Card body>
            <p className="display-4 border-bottom p-2">
              Welcome to InfinityMint
              <small className="fs-4 ms-2">Bootstrap 5</small>
            </p>
            <p>
              This is the bootstrap 5 version of the InfinityMint client. If you
              need to use <u>TailwindCSS</u> instead, please refer to the docs.
            </p>
            <ListGroup>
              <ListGroup.Item>
                Check out the{" "}
                <a
                  href="https://docs.infinitymint.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  official documentation
                </a>{" "}
                for InfinityMint to get started quickly!
              </ListGroup.Item>
              <ListGroup.Item>
                You can hide/show the InfinityMint Client Dashboard by pressing{" "}
                <kbd>CTRL-Q</kbd> on your keyboard.
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
