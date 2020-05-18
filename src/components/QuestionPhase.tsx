import React from "react";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Avatar from "react-avatar";
import {Formik, Form as FormikForm, Field} from "formik";
import Form from "react-bootstrap/Form";
import * as Yup from 'yup';
import { QuizRenderer_team } from "./__generated__/QuizRenderer_team.graphql";
import { postQuestion } from "../lib/quiz";
import Container from "react-bootstrap/Container";
import CutImage from "../CutImage";
import WaitImg from "../wait1.jpg";
import WaitScreen from "./WaitScreen";
import QuestionImage from "../question.jpg";

const questionSchema = Yup.object().shape({
    question: Yup.string().required("Pflichtfeld"),
    modelAnswer: Yup.string().required("Pflichtfeld")
})

export default function QuestionPhase({team} : {team: QuizRenderer_team}) {
    if(team.userDone)
        return <WaitScreen 
            phase="Erarbeitungsphase" 
            title="Vielen Dank für deine Frage." 
            message="Die anderen Mitspieler brauchen noch einen kleinen Moment."
            image={WaitImg}/>
    else
        return (
            <>
            <div className="pt-3 px-3">
            <h2 className="text-center">Erarbeitungsphase</h2>
            <hr className="mb-0"/>
        </div>
        <Row noGutters className="align-items-start flex-grow-1 h-100">
            <Col md={6} className="p-3 mx-auto">
            <Alert variant="info">
                <i className="fas fa-info-circle"></i> In dieser Phase erarbeitest du eine Quizfrage, die du später deinen Mitspielern stellen darfst.
                Benutze als Hilfsmittel die vereinbarten Lernmaterialien oder die Knowledge Base.
            </Alert>
            <Formik
                initialValues={{
                    question: "",
                    modelAnswer: ""
                }}
                onSubmit={(values, actions) => {
                    postQuestion(team.id, values.question, values.modelAnswer)
                }}
            >
                {({values, errors, handleSubmit, isSubmitting}) => (
                    <FormikForm>
                        <Card>
                            <Card.Body>
                                <Card.Title>Deine Frage</Card.Title>
                                <Form.Group>
                                    <Form.Label>Thema</Form.Label>
                                    <Form.Control readOnly value={team.topic.code + " " + team.topic.name}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Frage</Form.Label>
                                    <Form.Control readOnly={team.userDone} name="question" as={Field} component="textarea" rows={5}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Musterantwort</Form.Label>
                                    <Form.Control readOnly={team.userDone} name="modelAnswer" as={Field} component="textarea" rows={5}/>
                                </Form.Group>
                            </Card.Body>
                            <Card.Footer>
                                <Button disabled={isSubmitting} type="submit"><i className="fas fa-paper-plane"></i> Frage speichern</Button>
                            </Card.Footer>

                        </Card>
                    </FormikForm>

                    )}
            </Formik>
            </Col>
            <CutImage src={QuestionImage}/>
        </Row>
   
            </>
        )
}