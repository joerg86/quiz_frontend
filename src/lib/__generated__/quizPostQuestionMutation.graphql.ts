/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type quizPostQuestionMutationVariables = {
    teamID: string;
    question: string;
    modelAnswer: string;
};
export type quizPostQuestionMutationResponse = {
    readonly postQuestion: {
        readonly team: {
            readonly id: string;
        } | null;
    } | null;
};
export type quizPostQuestionMutation = {
    readonly response: quizPostQuestionMutationResponse;
    readonly variables: quizPostQuestionMutationVariables;
};



/*
mutation quizPostQuestionMutation(
  $teamID: ID!
  $question: String!
  $modelAnswer: String!
) {
  postQuestion(input: {id: $teamID, question: $question, modelAnswer: $modelAnswer}) {
    team {
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
    "name": "teamID",
    "type": "ID!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "question",
    "type": "String!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "modelAnswer",
    "type": "String!"
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
            "variableName": "teamID"
          },
          {
            "kind": "Variable",
            "name": "modelAnswer",
            "variableName": "modelAnswer"
          },
          {
            "kind": "Variable",
            "name": "question",
            "variableName": "question"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "PostQuestionMutationPayload",
    "kind": "LinkedField",
    "name": "postQuestion",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TeamNode",
        "kind": "LinkedField",
        "name": "team",
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
    "name": "quizPostQuestionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "quizPostQuestionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "quizPostQuestionMutation",
    "operationKind": "mutation",
    "text": "mutation quizPostQuestionMutation(\n  $teamID: ID!\n  $question: String!\n  $modelAnswer: String!\n) {\n  postQuestion(input: {id: $teamID, question: $question, modelAnswer: $modelAnswer}) {\n    team {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c56a7ede94c12305af3fb240b8fa2494';
export default node;
