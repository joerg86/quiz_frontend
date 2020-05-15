import React from "react";
import { commitMutation, fetchQuery } from "react-relay";
import environment from "./relayEnv";
import graphql from 'babel-plugin-relay/macro';
import { QuizRenderer_team } from "../components/__generated__/QuizRenderer_team.graphql";
import { ScoreEnum } from "./__generated__/quizScoreAnswerMutation.graphql";
import { quizTopicsQuery} from "./__generated__/quizTopicsQuery.graphql"
import { quizUsersQuery } from "./__generated__/quizUsersQuery.graphql";

export function nextPhase(teamID: string) {
    commitMutation(
        environment,
        {
            mutation: graphql`
                mutation quizNextPhaseMutation(
                    $teamID: ID!
                ) {
                    nextPhase(input: { id: $teamID }) {
                        team {
                            id
                        }
                    }
                }
            `,
            variables: { teamID }
        }
    )
}


export function postQuestion(teamID: string, question: string, modelAnswer: string) {
    commitMutation(
        environment,
        {
            mutation: graphql`
                mutation quizPostQuestionMutation(
                    $teamID: ID!,
                    $question: String!,
                    $modelAnswer: String!
                ) {
                    postQuestion(input: { 
                            id: $teamID,
                            question: $question,
                            modelAnswer: $modelAnswer,
                        }) 
                    {
                        team {
                            id
                        }
                    }
                }
            `,
            variables: { teamID, question, modelAnswer }
        }
    )
}

export function postAnswer(teamID: string, answer: string) {
    commitMutation(
        environment,
        {
            mutation: graphql`
                mutation quizPostAnswerMutation(
                    $teamID: ID!,
                    $answer: String!
                ) {
                    postAnswer(input: { 
                            id: $teamID,
                            answer: $answer,
                        }) 
                    {
                        team {
                            id
                        }
                    }
                }
            `,
            variables: { teamID, answer }
        }
    )
}

export function scoreAnswer(answerID: string, score: ScoreEnum) {
    commitMutation(
        environment,
        {
            mutation: graphql`
                mutation quizScoreAnswerMutation(
                    $answerID: ID!,
                    $score: ScoreEnum!
                ) {
                    scoreAnswer(input: { 
                            id: $answerID,
                            score: $score,
                        }) 
                    {
                        answer {
                            id
                        }
                    }
                }
            `,
            variables: { answerID, score }
        }
    )
}

export function createTeam(name: string, topicId: string, onCompleted?: ({error, response}) => void) {
    return commitMutation(
        environment,
        {
            mutation: graphql`
                mutation quizCreateTeamMutation(
                    $topicId: ID!,
                    $name: String!
                ) {
                    createTeam(input: { 
                            topicId: $topicId,
                            name: $name
                        }) 
                    {
                        team {
                            id
                            name
                            creator {
                                username
                            }
                            createdAt
                        }
                    }
                }
            `,
            variables: { topicId, name },
            onCompleted

        }
    )
}

export function addMember(teamId : string, username : string, onCompleted?: ({error, response}) => void) {
    return commitMutation(
        environment,
        {
            mutation: graphql`
                mutation quizAddMemberMutation(
                    $teamId: ID!,
                    $username: String!
                ) {
                    addMember(input: { 
                            teamId: $teamId,
                            username: $username
                        }) 
                    {
                        team {
                            id
                        }   
                    }
                }
            `,
            variables: { teamId, username },
            onCompleted

        }
    )
}

export function removeMember(teamId : string, username : string, onCompleted?: ({error, response}) => void) {
    return commitMutation(
        environment,
        {
            mutation: graphql`
                mutation quizRemoveMemberMutation(
                    $teamId: ID!,
                    $username: String!
                ) {
                    removeMember(input: { 
                            teamId: $teamId,
                            username: $username
                        }) 
                    {
                        team {
                            id
                        }   
                    }
                }
            `,
            variables: { teamId, username },
            onCompleted

        }
    )
}

export async function getTopics(query: string) {
    let data = await fetchQuery<quizTopicsQuery>(
        environment,
        graphql`
            query quizTopicsQuery($query: String!) {
                topics(query: $query) {
                    edges {
                        node {
                            name
                            code
                            id
                        }
                    }
                }
            }
        `,
        {query}
    )
    return data.topics.edges.map((edge) => ({ value: edge.node.id, label: edge.node.code + " " + edge.node.name  }));
}

export async function getUsers(query: string) {
    let data = await fetchQuery<quizUsersQuery>(
        environment,
        graphql`
            query quizUsersQuery($query: String!) {
                users(username_Icontains: $query) {
                    edges {
                        node {
                            firstName
                            lastName
                            username
                        }
                    }
                }
            }
        `,
        {query}
    )
    return data.users.edges.map((edge) => ({ value: edge.node.username, label: `${edge.node.firstName} ${edge.node.lastName} (@${edge.node.username})` }));
}

