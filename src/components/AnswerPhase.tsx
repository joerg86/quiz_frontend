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
import AnswerCard from "./AnswerCard";
import QuestionCard from "./QuestionCard";
import { QuizRenderer_team } from "./__generated__/QuizRenderer_team.graphql";

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

export default function AnswerPhase({team} : {team: QuizRenderer_team}) {
    return (
        <div className="p-3">
        <h2 className="text-center">Fragephase</h2>
        <hr/>
        <Alert variant="info">
            <i className="fas fa-info-circle"></i> In dieser Phase beantwortest du die Fragen der anderen Mitspieler.
        </Alert>
        {team.currentQuestion && <QuestionCard question={team.currentQuestion}/> }
        <Formik
            initialValues={{
                question: "",
                modelAnswer: ""
            }}
            onSubmit={(values, actions) => {
                console.log("submit")
            }}
        >
            {({values, errors, handleSubmit}) => (
                <FormikForm>
                    <Card>
                        <Card.Body>
                            <Card.Title>Deine Antwort</Card.Title>
                                <Form.Control name="modelAnswer" as={Field} component="textarea"/>
                        </Card.Body>
                        <Card.Footer>
                            <Button type="submit"><i className="fas fa-paper-plane"></i> Antwort senden</Button>
                        </Card.Footer>

                    </Card>
                </FormikForm>

                )}
        </Formik>
        </div>
    )
}