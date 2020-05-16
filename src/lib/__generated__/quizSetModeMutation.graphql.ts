/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ModeEnum = "COMPETITION" | "TRAIN" | "%future added value";
export type quizSetModeMutationVariables = {
    teamId: string;
    mode: ModeEnum;
};
export type quizSetModeMutationResponse = {
    readonly setMode: {
        readonly team: {
            readonly id: string;
        } | null;
    } | null;
};
export type quizSetModeMutation = {
    readonly response: quizSetModeMutationResponse;
    readonly variables: quizSetModeMutationVariables;
};



/*
mutation quizSetModeMutation(
  $teamId: ID!
  $mode: ModeEnum!
) {
  setMode(input: {teamId: $teamId, mode: $mode}) {
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
    "name": "teamId",
    "type": "ID!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "mode",
    "type": "ModeEnum!"
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
            "name": "mode",
            "variableName": "mode"
          },
          {
            "kind": "Variable",
            "name": "teamId",
            "variableName": "teamId"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "SetModeMutationPayload",
    "kind": "LinkedField",
    "name": "setMode",
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
    "name": "quizSetModeMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "quizSetModeMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "quizSetModeMutation",
    "operationKind": "mutation",
    "text": "mutation quizSetModeMutation(\n  $teamId: ID!\n  $mode: ModeEnum!\n) {\n  setMode(input: {teamId: $teamId, mode: $mode}) {\n    team {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '0f93e7880ac5ff9af46719f9a9cc3252';
export default node;
