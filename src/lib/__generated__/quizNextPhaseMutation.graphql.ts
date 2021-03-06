/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type quizNextPhaseMutationVariables = {
    teamID: string;
};
export type quizNextPhaseMutationResponse = {
    readonly nextPhase: {
        readonly team: {
            readonly id: string;
        } | null;
    } | null;
};
export type quizNextPhaseMutation = {
    readonly response: quizNextPhaseMutationResponse;
    readonly variables: quizNextPhaseMutationVariables;
};



/*
mutation quizNextPhaseMutation(
  $teamID: ID!
) {
  nextPhase(input: {id: $teamID}) {
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
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "NextPhaseMutationPayload",
    "kind": "LinkedField",
    "name": "nextPhase",
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
    "name": "quizNextPhaseMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "quizNextPhaseMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "quizNextPhaseMutation",
    "operationKind": "mutation",
    "text": "mutation quizNextPhaseMutation(\n  $teamID: ID!\n) {\n  nextPhase(input: {id: $teamID}) {\n    team {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '5eb36350b52d701888229d11dd8442eb';
export default node;
