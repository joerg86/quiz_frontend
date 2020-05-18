import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginImg from "../login.jpg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";
//import Auth from "./Auth";
import {Link} from "react-router-dom";
import CutImage from "../CutImage";
import graphql from 'babel-plugin-relay/macro';
import environment from "../lib/relayEnv";

import { commitMutation } from "react-relay";


export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            username: "",
            rememberMe: true
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({errors: null});
        commitMutation(
            environment,
            {
                mutation: graphql`
                    mutation LoginPageMutation(
                        $username: String!,
                        $password: String!
                    ) {
                        tokenAuth(input: {
                            username: $username,
                            password: $password,
                        }) {
                            token
                        }
                    }
                `,
                variables: {
                    username: this.state.username,
                    password: this.state.password
                },
                onError: (error) => console.log(error),
                onCompleted: (response, errors) => {
                    console.log(response, errors)
                    if(response.tokenAuth == null)
                    {
                        this.setState({errors: ["Benutzername und/oder Kennwort falsch. Bitte achte auf Groß- und Kleinschreibung."]})
                        localStorage.setItem("jwt", null);
                    }
                    else
                    {
                        localStorage.setItem("jwt", response.tokenAuth.token);
                        this.loginRedirect();
                    }
                }
            }
        )

    }

    async loginRedirect() {
        this.props.history.push("/teams");
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        const newState = {};
        newState[name] = value;
        this.setState(newState);
    }
    componentDidMount() {
        this.usernameInput.focus();
    }
    render() {
        let errors = null;
        if(this.state.errors)
        {
            errors = this.state.errors.map((e, idx) => (
                <Alert key={idx} variant="danger">{e}</Alert>
            ))
        }

        return (
            <>
                    <Row noGutters className="flex-grow-1 align-items-center h-100">
                        <Col md={6}>
                            <Container fluid className="my-3 text-center col-sm-9 col-lg-6">
                                <h1>Login</h1>
                                <Form onSubmit={this.handleSubmit}>
                                    {errors}
                                    <Form.Group>
                                        <Form.Label>Benutzername</Form.Label>
                                        <Form.Control ref={input => this.usernameInput = input} name="username" type="text" required value={this.state.username} onChange={this.handleChange}/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Passwort</Form.Label>
                                        <Form.Control type="password" required name="password" value={this.state.password} onChange={this.handleChange}/>
                                    </Form.Group>

                                    <div className="btn-group">
                                    <Button type="submit"><i className="fa fa-sign-in-alt"></i> Login</Button>
                                    

                                    </div>

                                </Form>

                            </Container>

                        </Col>
                        <CutImage src={LoginImg}/>
                    </Row>
            </>
        );
    }
}