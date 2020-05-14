import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";
import graphql from 'babel-plugin-relay/macro';
import {QueryRenderer} from "react-relay";
import environment from "../lib/relayEnv";
import {TeamsPageQuery} from "./__generated__/TeamsPageQuery.graphql";
import moment from "moment";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import CutImage from "../CutImage";
import PlayImage from "../play.jpg";
import * as Yup from "yup";
import {Form as FormikForm, Formik, Field} from "formik";
import AsyncSelect from 'react-select/async';
import { getTopics, createTeam } from "../lib/quiz";

const teamSchema = Yup.object().shape({
    name: Yup.string().required("Pflichtfeld"),
    topic: Yup.object().required("Pflichtfeld")
})

export default function PlayPage() {
    return (
    <>
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
        render={({error, props, retry}) => {
        window.setTimeout(retry, 3000);
        return (
        <Row noGutters className="flex-grow-1 align-items-center h-100">
            <Col md={6} className="px-5">
                <h1>Spielen</h1>
                <Card className="my-3">
                    <Card.Body>
                        <Card.Title>Meine Teams</Card.Title>

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
                                        <tr key={edge.node.id}>
                                            <td>
                                                <Link to={`/teams/${edge.node.id}`}>
                                                    {edge.node.name}
                                                </Link>
                                            </td>
                                            <td>{edge.node.topic.code} {edge.node.topic.name}</td>
                                            <td>{edge.node.creator.username}</td>
                                            <td>{(edge.node.mode == "TRAIN") ? "Training" : "Wettkampf"}</td>
                                            <td>{moment(edge.node.createdAt).fromNow()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                    </Card.Body>
                </Card>
                <Card bg="light" className="">
                    <Card.Body>
                        <Card.Title>Ein neues Team gründen</Card.Title>
                            <Formik
                                validationSchema={teamSchema}
                                initialValues={{
                                    name: "",
                                    topic: null
                                }}
                                onSubmit={(values, actions) => {
                                        createTeam(values.name, values.topic.value, () => retry())
                                    }
                                }
                            >
                                {({values, errors, isSubmitting, setFieldValue}) => 
                                <FormikForm>
                                    <Form.Group>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control name="name" as={Field}/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Thema</Form.Label>
                                        <AsyncSelect
                                            placeholder="Thema wählen..."
                                            cacheOptions 
                                            loadOptions={getTopics} 
                                            noOptionsMessage={(v) => "Bitte Suchbegriff eingeben..."} 
                                            onChange={(value) => setFieldValue("topic", value)}
                                           
                                        />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Team gründen
                                    </Button>
                                </FormikForm>
                                }
                            </Formik>
                    </Card.Body>
                </Card>
            </Col>
            <CutImage src={PlayImage}/>
        </Row>
        )}}/>
        </>
    )
}