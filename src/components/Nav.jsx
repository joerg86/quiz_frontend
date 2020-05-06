import React from 'react';

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Container from 'react-bootstrap/Container';

export default function Appbar() {
  return (
    <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Q-Teams</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/teams">Teams</Nav.Link>

                    </Nav>

                    <Form inline>
                    <FormControl type="text" placeholder="Nach Inspiration suchen..." className="mr-sm-2" />
                    <Button variant="outline-success">Suchen</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  );
}

