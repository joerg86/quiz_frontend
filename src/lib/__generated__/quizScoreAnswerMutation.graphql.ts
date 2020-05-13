/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ScoreEnum = "PARTIAL" | "RIGHT" | "WRONG" | "%future added value";
export type quizScoreAnswerMutationVariables = {
    answerID: string;
    score: ScoreEnum;
};
export type quizScoreAnswerMutationResponse = {
    readonly scoreAnswer: {
        readonly answer: {
            readonly id: string;
        } | null;
    } | null;
};
export type quizScoreAnswerMutation = {
    readonly response: quizScoreAnswerMutationResponse;
    readonly variables: quizScoreAnswerMutationVariables;
};



/*
mutation quizScoreAnswerMutation(
  $answerID: ID!
  $score: ScoreEnum!
) {
  scoreAnswer(input: {id: $answerID, score: $score}) {
    answer {
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "answerID",
    "type": "ID!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "score",
    "type": "ScoreEnum!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "answerID"
          },
          {
            "kind": "Variable",
            "name": "score",
            "variableName": "score"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "ScoreAnswerMutationPayload",
    "kind": "LinkedField",
    "name": "scoreAnswer",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AnswerNode",
        "kind": "LinkedField",
        "name": "answer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "quizScoreAnswerMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "quizScoreAnswerMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "quizScoreAnswerMutation",
    "operationKind": "mutation",
    "text": "mutation quizScoreAnswerMutation(\n  $answerID: ID!\n  $score: ScoreEnum!\n) {\n  scoreAnswer(input: {id: $answerID, score: $score}) {\n    answer {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '81d0012e1108624c0cb06bd13ae30997';
export default node;
