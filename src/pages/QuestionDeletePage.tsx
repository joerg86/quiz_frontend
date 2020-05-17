import React from "react";
import { Formik, Form as FormikForm, Field } from "formik";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CutImage from "../CutImage";
import DeleteImage from "../delete.jpg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { QueryRenderer } from "react-relay";
import graphql from 'babel-plugin-relay/macro';
import environment from "../lib/relayEnv";
import { getTopics, updateQuestion, removeQuestion } from "../lib/quiz";
import AsyncSelect from 'react-select/async';
import { useHistory, useParams, useLocation } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { QuestionEditPageQuery } from "./__generated__/QuestionEditPageQuery.graphql";
import qs from "qs";

export default function QuestionDeletePage() {
    const history = useHistory();
    const {questionID} = useParams();
    const location = useLocation();

    let { backTo } : {backTo? : string }= qs.parse(location.search.slice(1));

    if(!backTo)
        backTo = "/kb/browse/";

    return (
        <Row noGutters className="flex-grow-1 align-items-center h-100">
        <Col md={6} className="px-5 text-center">
            <h1 className="mb-3">Frage löschen</h1>
            <p className="lead">
                Möchtest du die Frage wirklich unwiderruflich löschen?
            </p>
            <ButtonGroup className="mt-3">
                <Button onClick={(e) => { removeQuestion(questionID); history.push(backTo) }} variant="danger"><i className="fas fa-trash"></i> Löschen</Button>
                <LinkContainer to={backTo}>
                    <Button variant="secondary"><i className="fas fa-times"></i> Abbrechen</Button>
                </LinkContainer>
            </ButtonGroup>
        </Col>
        <CutImage src={DeleteImage}/>
    </Row>
    )
}