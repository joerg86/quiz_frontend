import React, { useState, useEffect } from "react";
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
import { QueryRenderer, fetchQuery } from "react-relay";
import graphql from 'babel-plugin-relay/macro';
import { KBBrowsePageQuery } from "./__generated__/KBBrowsePageQuery.graphql";
import { KBBrowsePageTopicQuery } from "./__generated__/KBBrowsePageTopicQuery.graphql";

import environment from "../lib/relayEnv";
import { getTopics } from "../lib/quiz";
import AsyncSelect from 'react-select/async';
import { useHistory, useLocation, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import UserBadge from "../components/UserBadge";
import qs from "qs";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { LinkContainer } from "react-router-bootstrap";


export default function KBBrowsePage() {
    const history = useHistory();
    const location = useLocation();
    let { topicID } = useParams();

    const params = qs.parse(location.search.slice(1));
    const query = params.q as string;
    const own = params.own == "true"
    const [topic, setTopic] = useState<any>();


    useEffect(()=> {
        async function fetchTopic() {
            const response = await fetchQuery<KBBrowsePageTopicQuery>(
                environment,
                graphql`
                    query KBBrowsePageTopicQuery(
                        $topicID: ID!
                    ) {
                        topic(id: $topicID) {
                            name
                            code
                        }
                    }
                `,
                {topicID},
            );
            setTopic({label: `${response.topic.code} ${response.topic.name}`});
        }
        if(topicID)
            fetchTopic();
        else
            setTopic(null);
    }, [topicID])

    const querystring = {
        q: query,
        own: own
    }
    function search() {
        history.push(`/kb/browse/${topicID ? topicID+"/" : ""}?${qs.stringify(querystring)}`)
    }

    return (
        <Container className="px-5">
            <Row>
                <Col md={4}>
                    <Form.Control className="mt-5" type="search" placeholder="Suchbegriff eingeben..." name="q" value={query} 
                        onChange={(e) => { querystring.q = e.target.value; search() }}/>
                </Col>
                <Col md={4}>
                    <AsyncSelect
                        className="my-5"
                        placeholder="Thema wählen..."
                        cacheOptions 
                        loadOptions={getTopics} 
                        noOptionsMessage={(v) => "Bitte Suchbegriff eingeben..."} 
                        onChange={(value: any) => {topicID = value?.value; search()}}
                        value={topic}
                        isClearable
                                                
                    />
                </Col>
                <Col md={4}>
                    <ButtonGroup className="my-5 w-100">
                        <Button onClick={() => { querystring.own = false; search()}} variant={ own ? "outline-primary" : "primary"}><i className="fas fa-user-friends"></i> Alle Fragen</Button>
                        <Button onClick={() => { querystring.own = true; search()}} variant={ !own ? "outline-primary" : "primary"}><i className="fas fa-user"></i> Meine Fragen</Button>
                    </ButtonGroup>
                </Col>
            </Row>
            <QueryRenderer<KBBrowsePageQuery>
                environment={environment}
                query={graphql`
                    query KBBrowsePageQuery(
                        $topicID: ID
                        $query: String
                        $own: Boolean
                    ) {
                        questions(topic: $topicID, query: $query, own: $own) {
                            edges {
                                node {
                                    id
                                    question
                                    modelAnswer
                                    author {
                                        ...UserBadge_user
                                        email
                                        isMe
                                    }
                                    topic {
                                        name
                                        code
                                    }
                                }
                            }
                        }
                    }
                `}
                variables={{topicID, query, own}}
                render={({error, props}) =>
                <>
                    {props && props.questions.edges.map((edge) =>
                            <Card key={edge.node.id} className="my-3">
                                <Card.Body>
                                    <Card.Title>
                                    {edge.node.question}
                                    <div className="text-muted">
                                        <small>{edge.node.topic.code} {edge.node.topic.name}</small>
                                    </div>
                                    </Card.Title>
                                    {edge.node.modelAnswer}
                                </Card.Body>
                                <Card.Footer>
                                    <Row>
                                        <Col>
                                        <UserBadge user={edge.node.author}/>
                                        </Col>
                                        <Col className="text-right">
                                                <ButtonGroup size="sm">
                                                <Button variant="outline-primary" as="a" title="E-Mail an Autor" href={`mailto:${edge.node.author.email}`}>
                                                    <i className="fas fa-envelope"></i>
                                                </Button>
                                                <span> </span>

                                                {edge.node.author.isMe && 
                                                    <>
                                                        <LinkContainer to={`/kb/edit/${edge.node.id}/?backTo=${location.pathname}`}>
                                                            <Button variant="outline-primary" title="Frage bearbeiten" href=""><i className="fas fa-pencil-alt"></i></Button>
                                                        </LinkContainer>
                                                        <span> </span>

                                                        <LinkContainer to={`/kb/delete/${edge.node.id}/?backTo=${location.pathname}`}>
                                                            <Button className="text-danger" variant="outline-primary" title="Frage löschen" href=""><i className="fas fa-trash"></i></Button>
                                                        </LinkContainer>
                                                        <span> </span>
                                                    </>
                                                }

                                            </ButtonGroup>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                    )}
                </>
            }/>

        </Container>

    )
}