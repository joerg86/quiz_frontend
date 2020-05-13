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
import { nextPhase } from "../lib/quiz";


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
                    <Button size="lg" className="m-3" onClick={() => nextPhase(team.id)}>
                        <i className="fas fa-play"></i> Neue Runde starten
                    </Button>
                </Container>
            </Col>
            <CutImage src={SeascapeImg}/>
        </Row>
        </>
    )
}