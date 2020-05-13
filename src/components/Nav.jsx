import React from 'react';

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Container from 'react-bootstrap/Container';
import { LinkContainer } from "react-router-bootstrap";

export default function Appbar() {
  return (
    <>
        <div className="flex-shrink-0">
            <Navbar bg="dark" expand="lg" variant="dark" className="row no-gutters border-bottom border-primary my-0">
                <Container>
                    <Navbar.Brand href="#home">Q-Teams</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <LinkContainer to="/" exact>
                                <Nav.Link className="m-1"><i className="fas fa-home"></i> Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/teams">
                                <Nav.Link className="m-1"><i className="fas fa-users"></i> Spielen</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/kb">
                                <Nav.Link className="m-1"><i className="fas fa-question-circle"></i> Knowledge Base</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link className="m-1"><i className="fas fa-sign-in-alt"></i> Login</Nav.Link>
                            </LinkContainer>
                        </Nav>

                        <Form inline>
                        <FormControl type="text" placeholder="Nach Inspiration suchen..." className="mr-sm-2" />
                        <Button variant="outline-primary">Suchen</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    </>
  );
}

