/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type quizRemoveMemberMutationVariables = {
    teamId: string;
    username: string;
};
export type quizRemoveMemberMutationResponse = {
    readonly removeMember: {
        readonly team: {
            readonly id: string;
        } | null;
    } | null;
};
export type quizRemoveMemberMutation = {
    readonly response: quizRemoveMemberMutationResponse;
    readonly variables: quizRemoveMemberMutationVariables;
};



/*
mutation quizRemoveMemberMutation(
  $teamId: ID!
  $username: String!
) {
  removeMember(input: {teamId: $teamId, username: $username}) {
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
    "name": "username",
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
            "name": "teamId",
            "variableName": "teamId"
          },
          {
            "kind": "Variable",
            "name": "username",
            "variableName": "username"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "RemoveMemberMutationPayload",
    "kind": "LinkedField",
    "name": "removeMember",
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
    "name": "quizRemoveMemberMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "quizRemoveMemberMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "quizRemoveMemberMutation",
    "operationKind": "mutation",
    "text": "mutation quizRemoveMemberMutation(\n  $teamId: ID!\n  $username: String!\n) {\n  removeMember(input: {teamId: $teamId, username: $username}) {\n    team {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a65ac6de48e25ace18d1fd3f02d25bef';
export default node;
