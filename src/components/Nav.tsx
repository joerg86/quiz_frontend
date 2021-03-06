import React from 'react';

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Container from 'react-bootstrap/Container';
import { LinkContainer } from "react-router-bootstrap";
import UserBadge from "./UserBadge";
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import environment from '../lib/relayEnv';
import { NavQuery } from "./__generated__/NavQuery.graphql";
import { logout } from '../lib/auth';
import { useHistory } from 'react-router-dom';

export default function Appbar({auth, setAuth}) {
  const history = useHistory();

  return (
    <>
        <QueryRenderer<NavQuery>
        environment={environment}
        query={graphql`
            query NavQuery {
                me {
                    firstName
                    lastName
                }
            }
        `}
        variables={{auth}}
        render= {({props, error, retry}) =>
            <div className="flex-shrink-0">
                <Navbar bg="dark" collapseOnSelect={true} expand="lg" variant="dark" className="row no-gutters border-bottom border-primary my-0 text-light">
                    <Container>
                        <Navbar.Brand href="#home">Q-Teams</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <LinkContainer to="/" exact>
                                    <Nav.Link className="m-1"><i className="fas fa-home"></i> Home</Nav.Link>
                                </LinkContainer>

                                { (props && props.me) && 
                                    <>
                                        <LinkContainer to="/teams">
                                            <Nav.Link className="m-1"><i className="fas fa-users"></i> Spielen</Nav.Link>
                                        </LinkContainer>

                                        <LinkContainer to="/kb">
                                            <Nav.Link className="m-1"><i className="fas fa-question-circle"></i> Knowledge Base</Nav.Link>
                                        </LinkContainer> 
                                    </>                               
                                }
                
                            </Nav>

                            <Navbar.Text className="mx-1">
                                { (props && props.me) && 
                                    <Navbar.Text className="text-primary">
                                        <strong>{props.me.firstName} {props.me.lastName}</strong>
                                    </Navbar.Text> }

                            </Navbar.Text>

                            <Nav>
                                { (props && props.me) ? 
                                    <Nav.Link onClick={(e) => { logout(); setAuth(false); retry(); history.push("/") } } className="m-1"><i className="fas fa-sign-out-alt"></i> Logout</Nav.Link>
                                    :
                                    <LinkContainer to="/login">
                                        <Nav.Link className="m-1"><i className="fas fa-sign-in-alt"></i> Login</Nav.Link>
                                    </LinkContainer>
                                }
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        }/>
    </>
  );
}

