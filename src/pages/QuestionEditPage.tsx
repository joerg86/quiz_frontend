import React from "react";
import { Formik, Form as FormikForm, Field } from "formik";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CutImage from "../CutImage";
import EditImage from "../edit.jpg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { QueryRenderer } from "react-relay";
import graphql from 'babel-plugin-relay/macro';
import environment from "../lib/relayEnv";
import { getTopics, updateQuestion } from "../lib/quiz";
import AsyncSelect from 'react-select/async';
import { useHistory, useParams, useLocation } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { QuestionEditPageQuery } from "./__generated__/QuestionEditPageQuery.graphql";
import qs from "qs";

export default function QuestionEditPage() {
    const history = useHistory();
    const {questionID} = useParams();
    const location = useLocation();

    let { backTo } : {backTo? : string }= qs.parse(location.search.slice(1));

    if(!backTo)
        backTo = "/kb/browse/";

    return (
        <Row noGutters className="flex-grow-1 align-items-center h-100">
        <Col md={6} className="px-5">
            <h1 className="mb-3">Frage bearbeiten</h1>
            <QueryRenderer<QuestionEditPageQuery>
                environment={environment}
                query={graphql`
                    query QuestionEditPageQuery(
                        $questionID: ID!
                    ) {
                        question(id: $questionID) {
                            id
                            question
                            modelAnswer
                            topic {
                                name
                                code
                            }
                        }
                    }
                `}
                variables={{questionID}}
                render={({error, props}) => {
                    if(error)
                        return <h1>Error</h1>
                    if(props)
                        return <>
                            <Formik
                                initialValues={{ question: props.question.question, modelAnswer: props.question.modelAnswer}}
                                onSubmit={(values, actions) => {
                                    updateQuestion(questionID, values.question, values.modelAnswer);
                                    history.push(backTo);
                                }}
                            >
                                { ({isSubmitting, values}) =>
                                    <>
                                        <FormikForm>
                                            <Form.Group>
                                                <Form.Label>Thema</Form.Label>
                                                <Form.Control disabled value={props.question.topic.code + " " + props.question.topic.name}/>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Frage</Form.Label>
                                                <Form.Control name="question" as={Field} component="textarea" rows={5}/>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Musterantwort</Form.Label>
                                                <Form.Control name="modelAnswer" as={Field} component="textarea" rows={5}/>
                                            </Form.Group>
                                            <ButtonGroup>
                                                <Button disabled={isSubmitting} type="submit"><i className="fas fa-save"></i> Speichern</Button>
                                                <LinkContainer to={backTo}>
                                                    <Button variant="secondary"><i className="fas fa-times"></i> Abbrechen</Button>
                                                </LinkContainer>
                                            </ButtonGroup>
                                        </FormikForm>
                                    </>
                                }
                            </Formik>
                        </>
                }
            }/>

        </Col>
        <CutImage src={EditImage}/>
    </Row>
    )
}