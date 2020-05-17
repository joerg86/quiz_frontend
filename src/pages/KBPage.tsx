import React from "react";
import { Formik, Form as FormikForm } from "formik";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CutImage from "../CutImage";
import KBImage from "../kb.jpg";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { QueryRenderer } from "react-relay";
import graphql from 'babel-plugin-relay/macro';
import { KBPageQuery } from "./__generated__/KBPageQuery.graphql";
import environment from "../lib/relayEnv";
import { getTopics } from "../lib/quiz";
import AsyncSelect from 'react-select/async';
import { useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";


export default function KBPage() {
    const history = useHistory();

    return (
        <Row noGutters className="flex-grow-1 align-items-center h-100">
        <Col md={6} className="px-5">
            <h1>Knowledge Base</h1>
            <p className="lead my-3">
                In der Knowledge Base findest du Fragen anderer Benutzer, die dir als Inspiration dienen können.
                Starte mit einem Suchbegriff oder wähle einfach ein Thema.
            </p>
            <Form method="GET" action="/kb/browse/">
            <InputGroup className="my-5">
                <Form.Control type="search" placeholder="Suchbegriff eingeben..." name="q"/>
                <InputGroup.Append>
                    <Button type="submit"><i className="fas fa-search"></i> Suchen</Button>
                </InputGroup.Append>
            </InputGroup>
            </Form>

            <h2 className="my-3">Nach Thema suchen</h2>
            <AsyncSelect
                placeholder="Thema wählen..."
                cacheOptions 
                loadOptions={getTopics} 
                noOptionsMessage={(v) => "Bitte Suchbegriff eingeben..."} 
                onChange={(value: any) => history.push(`/kb/${value.value}`)}
                value={null}
                                           
            />
            <h2 className="mt-5 mb-3">Hot Topics</h2>
            <QueryRenderer<KBPageQuery>
                environment={environment}
                query={graphql`
                    query KBPageQuery {
                        topics(first: 20, orderBy: "-questionCount") {
                            edges {
                                node {
                                    id
                                    name
                                    code
                                    questionCount
                                }
                            }
                        }
                    }
                `}
                variables={{}}
                render={({error, props}) =>
                <>
                    {props && props.topics.edges.map((edge) =>
                        <>
                            <LinkContainer key={edge.node.id}  to={`/kb/browse/${edge.node.id}`}>
                            <Button variant="outline-secondary" size="sm" className="m-1">
                                {edge.node.code} {edge.node.name} <Badge variant="secondary" pill>{edge.node.questionCount}</Badge>
                            </Button>
                            </LinkContainer>
                        </>
                    )}
                </>
            }/>

        </Col>
        <CutImage src={KBImage}/>
    </Row>
    )
}