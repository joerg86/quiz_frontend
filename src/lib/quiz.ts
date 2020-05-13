import React from "react";
import { commitMutation } from "react-relay";
import environment from "./relayEnv";
import graphql from 'babel-plugin-relay/macro';
import { QuizRenderer_team } from "../components/__generated__/QuizRenderer_team.graphql";


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
                            ...QuizRenderer_team
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
                            ...QuizRenderer_team
                        }
                    }
                }
            `,
            variables: { teamID, question, modelAnswer }
        }
    )
}

