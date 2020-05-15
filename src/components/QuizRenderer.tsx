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
import UserSelect from "./UserSelect";
import { addMember, removeMember } from "../lib/quiz";
import { useHistory } from "react-router-dom";
import { QuizRendererSubscription } from "./__generated__/QuizRendererSubscription.graphql";

function QuizRenderer({team} : {team: QuizRenderer_team}) {
    const history = useHistory();

    useEffect(()=> {
        return requestSubscription<QuizRendererSubscription>(
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
                    if(response.teamUpdated === null)
                        history.push("/teams")
                }
            }
        ).dispose;
    }, [team.id])

    return (
        <Row noGutters className="h-100">
            <Col xl={2} lg={3} className="bg-light2 p-3">
                <h3>{team.name}</h3>
                <strong>{team.topic.code} {team.topic.name}</strong>

                { team.membershipSet.edges.map((edge) => 
                <div key={edge.node.id}>
                <hr/>
                <Row>
                    <Col xs="auto">
                        <Avatar size="60" name={edge.node.user.firstName + " " + edge.node.user.lastName} round/>
                    </Col>
                    <Col>
                        <h6>{edge.node.user.firstName} {edge.node.user.lastName}<span> </span>
                        { (edge.node.id == team.creator.id) && <><i className="fas fa-shield-alt"></i><span> </span></>} 
                        { false && <i className="fas fa-crown"></i>}
                        { team.creator.isMe && !edge.node.user.isMe && ((team.state == "OPEN") || (team.state == "DONE")) &&
                            <Button onClick={(e) => {removeMember(team.id, edge.node.user.username)}} className="float-right" size="sm" variant="light"
                                title={`${edge.node.user.firstName} ${edge.node.user.lastName} entfernen`} href="">
                                <i className="fas fa-times text-danger"></i>
                            </Button>}

                        <br/><small className="text-muted">@{edge.node.user.username}</small></h6>
                        <div className="text-muted">

                            <Badge variant="success" pill>{edge.node.right}</Badge><span> </span>
                            <Badge variant="warning" pill>{edge.node.partial}</Badge><span> </span>
                            <Badge variant="danger" pill>{edge.node.wrong}</Badge>
                        </div>
                    </Col>
                </Row>
                </div>
                )}
            </Col>

            <Col xl={10} lg={9} className="h-100 d-flex flex-column">
                {
                    (team.state == "OPEN" || team.state == "DONE") && <OpenPhase team={team}/>
                }
                {
                    (team.state == "QUESTION") && <QuestionPhase team={team}/>
                }
                {
                    (team.state == "ANSWER") && <AnswerPhase team={team}/>
                }
                {
                    (team.state == "SCORING") && <ScoringPhase team={team}/>
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
                id
                username
                firstName
                lastName
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
            currentQuestion {
                id
                question
                modelAnswer
                author {
                    username
                    ...UserBadge_user
                    isMe
                }
                answerSet {
                    edges {
                        node {
                            id
                            answer
                            score
                            author {
                                username
                                lastName
                                firstName
                                isMe
                                ...UserBadge_user
                            }
                        }
                    }
                }
            }
            membershipSet {
                edges {
                    node {
                        id
                        user {
                            id
                            username
                            lastName
                            firstName
                            isMe
                        }
                        right
                        wrong
                        partial
                        score
                    }
                }
            }
        }
        `
    }
)