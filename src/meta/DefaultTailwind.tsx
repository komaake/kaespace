import React, { useContext } from "react";
import Hero from "../components/tailwind/Hero";
import Link from "../components/tailwind/Link";
import Card from "../components/tailwind/Card";
import Row from "../components/tailwind/Row";
import Col from "../components/tailwind/Col";
import Container from "../components/tailwind/Container";
import { ClientContext } from "infinitymint-client/dist/src/contexts/clientProvider";

export default function DefaultTailwind() {
  const client = useContext(ClientContext);
  return (
    <Container fluid>
      <Hero className="text-center">
        <h1 className="text-6xl mb-4">
          Welcome To <u>InfinityMint</u> TailwindCSS
        </h1>
        <p>
          Read the docs <Link href="https://docs.infinitymint.app">here</Link>{" "}
          to get started!
        </p>
        <br />
        <p className="text-gray-500">
          You can press <u>CTRL-Q</u> on your keyboard to show/hide the
          InfinityMint Client Dashboard.
        </p>
        <Container className="pt-4">
          <Row className="mt-4">
            <Col>
              <Card>
                <Card.Header>{client.project?.name}</Card.Header>
                <Card.Body>
                  <p>
                    Full Name: <b>{client.project?.projectFullName}</b>
                  </p>
                  <p>
                    Network:{" "}
                    <b>{client.project?.deployedProject?.network?.name}</b>
                  </p>
                  <p>
                    ChainId:{" "}
                    <b>{client.project?.deployedProject?.network?.chainId}</b>
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Hero>
    </Container>
  );
}
