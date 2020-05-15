import React from "react";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Avatar from "react-avatar";
import { QuizRenderer_team } from "./__generated__/QuizRenderer_team.graphql";
import UserBadge from "./UserBadge";
import QuestionCard from "./QuestionCard";
import { scoreAnswer, nextPhase } from "../lib/quiz";
import { ScoreEnum } from "../lib/__generated__/quizScoreAnswerMutation.graphql";

export default function ScoringPhase({team} : {team: QuizRenderer_team}) {

    const scoreClassMap = {
        "A_1": "border-warning",
        "A_3": "border-success",
        "A_0": "border-danger",
    }

    const isModerator = team.currentQuestion.author.isMe;

    return (
        <div className="p-3">
        <h2 className="text-center">Bewertungsphase</h2>
        <hr/>
        {team.currentQuestion && 
            <>
                <QuestionCard question={team.currentQuestion}/>
                <Card bg="success" className="text-light">
                    <Card.Body>
                        <Card.Title>Musterantwort</Card.Title>
                        {team.currentQuestion.modelAnswer}
                    </Card.Body>
                </Card>
            </>    
        }

        {team.currentQuestion.answerSet.edges.map((edge) => 
            <Card key={edge.node.id} className={"my-3 "+scoreClassMap[edge.node.score]}>
                <Card.Body>
                    <Card.Text>
                        {edge.node.answer}
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-right">
                    <Row>
                    <Col className="text-left">
                        <UserBadge user={edge.node.author}/>
                    </Col>
                    <Col>
                    <ButtonGroup>
                        <Button disabled={!isModerator} onClick={(e) => scoreAnswer(edge.node.id, "RIGHT")} 
                            variant={ edge.node.score == "A_3" ? "success" : "outline-success"} 
                            size="sm"><i className="fas fa-check-double"></i> richtig
                        </Button><span> </span>

                        <Button disabled={!isModerator} onClick={(e) => scoreAnswer(edge.node.id, "PARTIAL")} 
                            variant={ edge.node.score == "A_1" ? "warning" : "outline-warning"} 
                            size="sm"><i className="fas fa-check"></i> tlw. richtig
                        </Button><span> </span>

                        <Button disabled={!isModerator} onClick={(e) => scoreAnswer(edge.node.id, "WRONG")} 
                            variant={ edge.node.score == "A_0" ? "danger" : "outline-danger"} 
                            size="sm"><i className="fas fa-times"></i> falsch
                        </Button><span> </span>
                    </ButtonGroup> 
                    </Col>
                    </Row>
                </Card.Footer>
            </Card>
            )}
            { isModerator &&
                <Button onClick={(e) => nextPhase(team.id)} variant="primary">
                    <i className="fas fa-check"></i> Bewertungphase abschließen
                </Button>
            }
        </div>
    )
}