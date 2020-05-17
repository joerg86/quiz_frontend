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
import { Link, useHistory } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import CutImage from "../CutImage";
import PlayImage from "../play.jpg";
import * as Yup from "yup";
import {Form as FormikForm, Formik, Field} from "formik";
import AsyncSelect from 'react-select/async';
import { getTopics, createTeam } from "../lib/quiz";
import UserBadge from "../components/UserBadge";


const teamSchema = Yup.object().shape({
    name: Yup.string().required("Pflichtfeld"),
    topic: Yup.object().required("Pflichtfeld")
})

export default function PlayPage() {
    const history = useHistory();
    let timeout = null;

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
                                ...UserBadge_user
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

        if(timeout !== null)
            window.clearTimeout(timeout);

        window.setTimeout(retry, 3000);

        return (
        <Row noGutters className="flex-grow-1 align-items-center h-100">
            <Col md={6} className="px-5">
                <h1>Spielen</h1>
                <p className="lead">
                    Wähle ein Team oder erstelle ein neues, damit es losgehen kann.
                </p>
                        
                { props && props.teams.edges.map((edge) => (
                    <Card key={edge.node.id} className="my-3">
                        <Card.Body>
                            <Card.Title>
                                <Link to={`/teams/${edge.node.id}`} className="stretched-link">
                                    {edge.node.name}
                                </Link>
                                <div className="text-muted"><small>{edge.node.topic.code} {edge.node.topic.name}</small></div>
                            </Card.Title>
                            <UserBadge user={edge.node.creator}/>
                        </Card.Body>
                    </Card>
                ))}

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
                                        createTeam(values.name, values.topic.value, (response) => {
                                            actions.setSubmitting(false);
                                            history.push(`/teams/${response.createTeam.team.id}`)
                                        })
                                    }
                                }
                            >   
                                {({values, errors, isSubmitting, setFieldValue}) => 
                                <div>
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
                                    <Button variant="primary" type="submit" disabled={isSubmitting}>
                                        { isSubmitting && <span><i className="fa fa-spin fa-spinner"></i> </span>}
                                        Team gründen
                                    </Button>
                                </FormikForm>
                                </div>
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