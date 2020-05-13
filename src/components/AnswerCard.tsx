import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Avatar from "react-avatar";

export default function AnwerCard({member, scoring}) {
    return (
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
            { scoring && 
                <Col>
                    <ButtonGroup>
                        <Button variant="outline-success" size="sm"><i className="fas fa-check-double"></i> richtig</Button><span> </span>
                        <Button variant="outline-warning" size="sm"><i className="fas fa-check"></i> tlw. richtig</Button><span> </span>
                        <Button variant="outline-danger" size="sm"><i className="fas fa-times"></i> falsch</Button><span> </span>
                    </ButtonGroup>
                </Col>
            }
            </Row>
        </Card.Footer>
        </Card>
    )
}

