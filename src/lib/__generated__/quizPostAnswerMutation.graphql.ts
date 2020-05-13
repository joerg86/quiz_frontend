/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type quizPostAnswerMutationVariables = {
    teamID: string;
    answer: string;
};
export type quizPostAnswerMutationResponse = {
    readonly postAnswer: {
        readonly team: {
            readonly id: string;
        } | null;
    } | null;
};
export type quizPostAnswerMutation = {
    readonly response: quizPostAnswerMutationResponse;
    readonly variables: quizPostAnswerMutationVariables;
};



/*
mutation quizPostAnswerMutation(
  $teamID: ID!
  $answer: String!
) {
  postAnswer(input: {id: $teamID, answer: $answer}) {
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
    "name": "answer",
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
            "name": "answer",
            "variableName": "answer"
          },
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "teamID"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "PostAnswerMutationPayload",
    "kind": "LinkedField",
    "name": "postAnswer",
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
    "name": "quizPostAnswerMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "quizPostAnswerMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "quizPostAnswerMutation",
    "operationKind": "mutation",
    "text": "mutation quizPostAnswerMutation(\n  $teamID: ID!\n  $answer: String!\n) {\n  postAnswer(input: {id: $teamID, answer: $answer}) {\n    team {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f332d794d8d07962dbca0cfcf048f859';
export default node;
