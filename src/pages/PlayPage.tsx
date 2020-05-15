import React from "react";
import { QueryRenderer } from "react-relay";
import { useParams, Link, Redirect } from "react-router-dom";
import { PlayPageQuery } from "./__generated__/PlayPageQuery.graphql"; 
import environment from "../lib/relayEnv";
import graphql from 'babel-plugin-relay/macro';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import moment from "moment";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import QuizRenderer from "../components/QuizRenderer";


export default function PlayPage() {
    let {id} = useParams();

    return (
        <>
            <QueryRenderer<PlayPageQuery>
                environment={environment}
                query={graphql`
                    query PlayPageQuery($id: ID!) {
                        team(id: $id) {
                            ...QuizRenderer_team
                        }
                    }
                `}
                variables={{
                    id: id,
                }}
                render={({error, props}) => {
                    if(error)
                    {
                        return <Redirect to="/teams"/>;
                    }
                    if(props) {
                        return (
                            <QuizRenderer team={props.team}/>
                        )
                    }
                }}

            />
        </>
    )
}