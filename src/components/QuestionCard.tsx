import React from "react";
import Card from "react-bootstrap/Card";
import UserBadge from "./UserBadge";

export default function QuestionCard({question}) {
    return (
        <Card className="my-3 text-light" bg="dark">
            <Card.Body>
                <Card.Title>Frage 2 von 4</Card.Title>
                {question.question}
            </Card.Body>
            <Card.Footer>
                <UserBadge user={question.author}/>
            </Card.Footer>
        </Card>
    )
}