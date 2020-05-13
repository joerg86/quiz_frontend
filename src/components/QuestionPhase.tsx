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

const questionSchema = Yup.object().shape({
    question: Yup.string().required("Pflichtfeld"),
    modelAnswer: Yup.string().required("Pflichtfeld")
})

const mockUsers = [
    { 
        last_name: "Sawatzki",
        first_name: "Jörg",
        username: "joerg",
        right: 1,
        wrong: 1,
        partial: 1,
        creator: true,
    },
    { 
        last_name: "Moch",
        first_name: "Daniel",
        username: "daniel",
        right: 3,
        wrong: 2,
        partial: 0
    },
    { 
        last_name: "Lapenat",
        first_name: "Holger",
        username: "holli",
        right: 3,
        wrong: 2,
        partial: 1,
        best: true,
    },
    { 
        last_name: "Hahn",
        first_name: "Max",
        username: "max",
        right: 4,
        wrong: 2,
        partial: 3
    },
    { 
        last_name: "Brückmann",
        first_name: "Tobias",
        username: "tobias.brueckmann",
        right: 5,
        wrong: 0,
        partial: 0
    }
]

export default function QuestionPhase({team} : {team: QuizRenderer_team}) {
    if(team.userDone)
        return (
            <>
            <div className="pt-3 px-3">
                <h2 className="text-center">Erarbeitungsphase</h2>
                <hr className="mb-0"/>
            </div>
            <Row noGutters className="align-items-center flex-grow-1 h-100">
                <Col md={6} className="text-center">
                    <Container className="p-5">
                        <h4 className="m-3">Vielen Dank für deine Frage.</h4>
                        <p className="lead m-3">
                            Die anderen Mitspieler brauchen noch einen kleinen Moment. 
                        </p>
                        <i className="fas fa-spin fa-spinner fa-3x text-muted"></i>
                    </Container>
                </Col>
                <CutImage src={WaitImg}/>
            </Row>
            </>
        )
    else
        return (
            <div className="p-3">
            <h2 className="text-center">Erarbeitungsphase</h2>
            <hr/>
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
                                    <Form.Control readOnly value="IREN01 Requirements Engineering"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Frage</Form.Label>
                                    <Form.Control readOnly={team.userDone} name="question" as={Field} component="textarea"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Musterantwort</Form.Label>
                                    <Form.Control readOnly={team.userDone} name="modelAnswer" as={Field} component="textarea"/>
                                </Form.Group>
                            </Card.Body>
                            <Card.Footer>
                                <Button disabled={isSubmitting} type="submit"><i className="fas fa-paper-plane"></i> Frage speichern</Button>
                            </Card.Footer>

                        </Card>
                    </FormikForm>

                    )}
            </Formik>
            </div>
        )
}