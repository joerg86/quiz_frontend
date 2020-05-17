import React from "react";
import Card from "react-bootstrap/Card";
import UserBadge from "./UserBadge";


export default function QuestionCard({question, number, total, showAnswer} : {question, number : number, total : number, showAnswer? : boolean}) {
    return (
        <Card className="my-3" bg="light">
            <Card.Body>
                <Card.Title>Frage {number} von {total}</Card.Title>
                {question.question}
                { showAnswer && 
                    <Card className="mt-3">
                        <Card.Body>
                            {question.modelAnswer}
                        </Card.Body>
                    </Card>
                }
            </Card.Body>
            <Card.Footer>
                <UserBadge user={question.author}/>
            </Card.Footer>
        </Card>
    )
}