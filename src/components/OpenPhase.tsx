import React from "react";
import { QuizRenderer_team } from "./__generated__/QuizRenderer_team.graphql";
import Jumbotron from "react-bootstrap/Jumbotron";
import SeascapeImg from "../seascape.jpg";
import CutImage from "../CutImage";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { nextPhase, addMember, setMode } from "../lib/quiz";
import UserSelect from "./UserSelect";
import ButtonGroup from "react-bootstrap/ButtonGroup";


export default function OpenPhase({team} : {team: QuizRenderer_team}) {


    return (
        <>
        <div className="pt-3 px-3">
            <h2 className="text-center">Beginn einer neuen Runde</h2>
            <hr className="mb-0"/>
        </div>
        <Row noGutters className="align-items-center flex-grow-1 h-100">
            <Col md={6} className="text-center">
                <Container className="p-5">
                    <h4 className="m-3">
                        {(team.state == "DONE") && "Gratulation! Ihr habt die aktuelle Runde abgeschlossen."}
                        {(team.state == "OPEN") && "Willkommen in eurem Q-Team  !"}
                    </h4>
                    <p className="lead m-3">
                        {(team.state == "DONE") && "Möchtet ihr eine weitere Runde spielen?"}
                        {(team.state == "OPEN") && "Wenn ihr bereit seid, kann es losgehen."}
                    </p>

                    { team.creator.isMe ?
                        (team.membershipSet.edges.length >= 2) ?
                        <Button size="lg" className="m-3" onClick={() => nextPhase(team.id)}>
                            <i className="fas fa-play"></i> Neue Runde starten
                        </Button>
                        :
                        <p className="text-muted">
                            <i className="fas fa-info-circle"></i> Um die Runde zu starten, muss das Team mindestens zwei Mitglieder haben.
                        </p>
                        :
                        <p className="text-muted">
                            <i className="fas fa-shield-alt"></i> Nur <em>{team.creator.firstName + " " + team.creator.lastName}</em> kann eine neue Runde starten.  
                        </p>
                    }
                    {team.creator.isMe &&
                        <Col md={6} className="mx-auto mt-5 p-3 bg-light">
                            <h5 className="m-3">Weitere Mitglieder hinzufügen</h5>
                            <UserSelect value={null} className="" placeholder="Mitglied hinzufügen..." onChange={(v) => addMember(team.id, v.value)}/>
                            <h5 className="m-3">Modus ändern</h5>
            
                            <ButtonGroup className="align-middle" size="sm">
                                <Button onClick={(e) => {setMode(team.id, "TRAIN")}} variant={ team.mode == "TRAIN" ? "secondary" : "outline-secondary"}>
                                    <i className="fas fa-smile"> </i><span> </span>
                                    Training
                                </Button>
                                <Button onClick={(e) => {setMode(team.id, "COMPETITION")}} variant={ team.mode == "COMPETITION" ? "secondary" : "outline-secondary"}>
                                    <i className="fas fa-crown"></i><span> </span>
                                    Wettkampf
                                </Button>
                            </ButtonGroup>

                        </Col>
                    }

                    
                </Container>
            </Col>
            <CutImage src={SeascapeImg}/>
        </Row>
        </>
    )
}