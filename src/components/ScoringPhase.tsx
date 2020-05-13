import React from "react";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Avatar from "react-avatar";

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

export default function ScoringPhase() {
    return (
        <>
        <h2 className="text-center">Bewertungsphase</h2>
        <hr/>
            <Alert variant="primary">
            <i className="fas fa-question-circle fa-2x"></i> Beschreiben Sie anhand eines Szenarios, welchen Herausforderungen die Zielkonflikte zwischen den Größen Kosten, Termin, Qualität ausgesetzt sind!
            </Alert>
        {mockUsers.map((member) => 
            <Card className="my-3">
                <Card.Body>
                    <Card.Text>
                    Beispiel: Wenn im Rahmen eines Projektes sehr großer Wert auf Qualitätssicherung gelegt wird, gehen die Aktivitäten der Qualitätssicherung zu Lasten der rechtzeitigen Fertigstellung. Wenn der Fokus auf die Projektkosten gelegt wird und dabei alle Termine einzuhalten sind, dann bleiben weniger Ressourcen für die Qualitätssicherung. Wenn aber ein Projekt in hoher Qualität punktgenau zu einem Termin ausgeliefert werden soll, dann wird der Kostenrahmen nicht zu halten sein.
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-right">
                    <Row>
                    <Col className="text-left">
                        <Avatar name={member.first_name + " " + member.last_name} size="24" round/>
                        <span> </span>{member.first_name} {member.last_name}
                    </Col>
                    <Col>
                    <ButtonGroup>
                    <Button variant="outline-success" size="sm"><i className="fas fa-check-double"></i> richtig</Button><span> </span>
                    <Button variant="outline-warning" size="sm"><i className="fas fa-check"></i> tlw. richtig</Button><span> </span>
                    <Button variant="outline-danger" size="sm"><i className="fas fa-times"></i> falsch</Button><span> </span>
                    </ButtonGroup>
                    </Col>
                    </Row>
                </Card.Footer>
            </Card>
            )}
        </>
    )
}