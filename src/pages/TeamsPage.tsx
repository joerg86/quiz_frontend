import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import graphql from 'babel-plugin-relay/macro';
import {QueryRenderer} from "react-relay";
import environment from "../lib/relayEnv";
import {TeamsPageQuery} from "./__generated__/TeamsPageQuery.graphql";


export default function PlayPage() {
    return (
        <>

            <Card className="mb-3">
                <Card.Body>
                    <Card.Title>Meine Teams</Card.Title>
                    <QueryRenderer<TeamsPageQuery>
                        environment={environment}
                        query={graphql`
                            query TeamsPageQuery {
                                teams {
                                    edges {
                                        node {
                                            id
                                            name
                                            mode
                                            state
                                            createdAt
                                            creator {
                                                username
                                            }
                                            topic {
                                                name
                                                code
                                            }
                                        }
                                    }
                                }
                            }
                    `}
                    variables={{}}
                    render={({error, props}) => (
                        <Table striped hover size="sm" responsive>
                            <thead>
                                <tr>
                                    <th>
                                        Name
                                    </th>
                                    <th>
                                        Thema
                                    </th>
                                    <th>
                                        Gründer
                                    </th>
                                    <th>
                                        Modus
                                    </th>
                                    <th>
                                        Erstellt
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            
                                { props && props.teams.edges.map((edge) => (
                                    <tr>
                                        <td>{edge.node.name}</td>
                                        <td>{edge.node.topic.code} {edge.node.topic.name}</td>
                                        <td>{edge.node.mode}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}/>
                </Card.Body>
            </Card>
            <Card bg="light">
                <Card.Body>
                    <Card.Title>Ein neues Team gründen</Card.Title>
                        <Form>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control name="name"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Thema</Form.Label>
                                <Form.Control name="topic"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Modus</Form.Label>
                                <Form.Control name="mode"/>
                            </Form.Group>
                            <Button variant="primary">
                                Team gründen
                            </Button>
                        </Form>
                </Card.Body>
            </Card>

        </>
    )
}