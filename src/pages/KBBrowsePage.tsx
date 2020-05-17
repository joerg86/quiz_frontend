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

export default function KBBrowsePage() {
    const history = useHistory();
    const location = useLocation();
    const { topicID } = useParams();

    const params = qs.parse(location.search.slice(1));
    const query = params.q as string;
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

    return (
        <Container className="px-5">
            <Row>
                <Col md={6}>
                    <Form.Control className="mt-5" type="search" placeholder="Suchbegriff eingeben..." name="q" value={query} 
                        onChange={(e) => history.push(`/kb/browse/?q=${e.target.value}`)}/>
                </Col>
                <Col md={6}>
                    <AsyncSelect
                        className="my-5"
                        placeholder="Thema wählen..."
                        cacheOptions 
                        loadOptions={getTopics} 
                        noOptionsMessage={(v) => "Bitte Suchbegriff eingeben..."} 
                        onChange={(value: any) => history.push(`/kb/browse/${value ? value.value : ""}/?q=${query ? query : ""}`)}
                        value={topic}
                        isClearable
                                                
                    />
                </Col>
            </Row>
            <QueryRenderer<KBBrowsePageQuery>
                environment={environment}
                query={graphql`
                    query KBBrowsePageQuery(
                        $topicID: ID
                        $query: String
                    ) {
                        questions(topic: $topicID, question_Icontains: $query) {
                            edges {
                                node {
                                    id
                                    question
                                    modelAnswer
                                    author {
                                        ...UserBadge_user
                                        email
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
                variables={{topicID, query}}
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
                                            <a href={`mailto:${edge.node.author.email}`}><i className="fas fa-envelope"></i> E-Mail an Autor</a>
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