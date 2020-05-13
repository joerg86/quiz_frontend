import React, { useEffect } from "react";
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer, requestSubscription } from "react-relay";

import { QuizRenderer_team } from "./__generated__/QuizRenderer_team.graphql";
import OpenPhase from "./OpenPhase";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Avatar from 'react-avatar';
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import ScoringPhase from "./ScoringPhase";
import QuestionPhase from "./QuestionPhase";
import AnswerPhase from "./AnswerPhase";
import environment from "../lib/relayEnv";

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

function QuizRenderer({team} : {team: QuizRenderer_team}) {

    useEffect(()=> {
        requestSubscription(
            environment,
            {
                subscription: graphql`
                    subscription QuizRendererSubscription(
                        $teamID: ID!
                    ) {
                        teamUpdated(id: $teamID) {
                            ...QuizRenderer_team
                        }
                    }
                `,
                variables: {
                    teamID: team.id
                },
                onNext: (response) => {
                    console.log(response);
                }
            }
        )
    }, [team.id])

    return (
        <Row noGutters className="h-100">
            <Col lg={2} className="bg-light2 p-3">
                <h3>{team.name}</h3>
                <strong>{team.topic.code} {team.topic.name}</strong>
                <InputGroup className="my-3">
                    <Form.Control placeholder="@username"/>
                    <InputGroup.Append>
                        <Button variant="outline-success">+</Button>
                    </InputGroup.Append>
                </InputGroup>
                { team.members.edges.map((edge) => 
                <div>
                <hr/>
                <Row>
                    <Col xs="auto">
                        <Avatar size="60" name={edge.node.firstName + " " + edge.node.lastName} round/>
                    </Col>
                    <Col>
                        <h6>{edge.node.firstName} {edge.node.lastName} { false && <i className="fas fa-shield-alt"></i>} { false && <i className="fas fa-crown"></i>}

                        <br/><small className="text-muted">@{edge.node.username}</small></h6>
                        <div className="text-muted">

                            <Badge variant="success" pill>0</Badge><span> </span>
                            <Badge variant="warning" pill>0</Badge><span> </span>
                            <Badge variant="danger" pill>0</Badge>
                        </div>
                    </Col>
                </Row>
                </div>
                )}
            </Col>

            <Col lg={10} className="h-100 d-flex flex-column">
                {
                    (team.state == "OPEN" || team.state == "DONE") && <OpenPhase team={team}/>
                }
                {
                    (team.state == "QUESTION") && <QuestionPhase team={team}/>
                }
                {
                    (team.state == "ANSWER") && <AnswerPhase team={team}/>
                }
            </Col>
        </Row>
    )
}
export default createFragmentContainer(
    QuizRenderer,
    {
        team: graphql`
        fragment QuizRenderer_team on TeamNode {
            id
            creator {
                username
                isMe
            }
            createdAt
            name
            topic {
                id
                code
                name
            }
            mode
            state
            userDone
            userQuestion {
                id
                question
                modelAnswer
            }
            currentQuestion {
                id
                question
                modelAnswer
                author {
                    username
                    lastName
                    firstName
                }
            }
            members {
                edges {
                    node {
                        username
                        lastName
                        firstName
                    }
                }
            }
        }
        `
    }
)