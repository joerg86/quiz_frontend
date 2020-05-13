
import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CutImage from "../CutImage";

export default function WaitScreen({phase, title, message, image}) {
    return (
        <>
        <div className="pt-3 px-3">
            <h2 className="text-center">{phase}</h2>
            <hr className="mb-0"/>
        </div>
        <Row noGutters className="align-items-center flex-grow-1 h-100">
            <Col md={6} className="text-center">
                <Container className="p-5">
                    <h4 className="m-3">{title}</h4>
                    <p className="lead m-3">
                        {message} 
                    </p>
                    <i className="fas fa-spin fa-spinner fa-3x text-muted"></i>
                </Container>
            </Col>
            <CutImage src={image}/>
        </Row>
        </>
    )
}