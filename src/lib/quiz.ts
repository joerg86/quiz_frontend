import React from "react";
import { commitMutation } from "react-relay";
import environment from "./relayEnv";
import graphql from 'babel-plugin-relay/macro';
import { QuizRenderer_team } from "../components/__generated__/QuizRenderer_team.graphql";
import { ScoreEnum } from "./__generated__/quizScoreAnswerMutation.graphql";


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

