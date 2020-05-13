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
import { postAnswer } from "../lib/quiz";
import WaitScreen from "./WaitScreen";
import WaitImg from "../wait2.jpg";

const answerSchema = Yup.object().shape({
    answer: Yup.string().required("Pflichtfeld"),
})

export default function AnswerPhase({team} : {team: QuizRenderer_team}) {
    if(team.userDone)
    {
        let title = "Vielen Dank für deine Antwort.";
        let message = "Die anderen Mitspieler sind sicher auch gleich fertig.";

        if(team.currentQuestion.author.isMe)
        {
            title = "Bitte einen Moment Geduld.";
            message = "Die anderen Spieler beantworten gerade deine Frage.";
        }

        return <WaitScreen 
            phase="Fragephase" 
            title={title}
            message={message}
            image={WaitImg}/>
    }
    else
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
                answer: ""
            }}
            validationSchema={answerSchema}
            onSubmit={(values, actions) => {
                postAnswer(team.id, values.answer)
            }}
        >
            {({values, errors, handleSubmit, isSubmitting}) => (
                <FormikForm>
                    <Card>
                        <Card.Body>
                            <Card.Title>Deine Antwort</Card.Title>
                                <Form.Control name="answer" as={Field} component="textarea"/>
                        </Card.Body>
                        <Card.Footer>
                            <Button type="submit" disabled={isSubmitting}><i className="fas fa-paper-plane"></i> Antwort senden</Button>
                        </Card.Footer>

                    </Card>
                </FormikForm>

                )}
        </Formik>
        </div>
    )
}