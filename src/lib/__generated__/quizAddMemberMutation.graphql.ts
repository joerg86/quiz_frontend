/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type quizAddMemberMutationVariables = {
    teamId: string;
    username: string;
};
export type quizAddMemberMutationResponse = {
    readonly addMember: {
        readonly team: {
            readonly id: string;
        } | null;
    } | null;
};
export type quizAddMemberMutation = {
    readonly response: quizAddMemberMutationResponse;
    readonly variables: quizAddMemberMutationVariables;
};



/*
mutation quizAddMemberMutation(
  $teamId: ID!
  $username: String!
) {
  addMember(input: {teamId: $teamId, username: $username}) {
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
    "concreteType": "AddMemberMutationPayload",
    "kind": "LinkedField",
    "name": "addMember",
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
    "name": "quizAddMemberMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "quizAddMemberMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "quizAddMemberMutation",
    "operationKind": "mutation",
    "text": "mutation quizAddMemberMutation(\n  $teamId: ID!\n  $username: String!\n) {\n  addMember(input: {teamId: $teamId, username: $username}) {\n    team {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '53e312549a7b142a11df33ca38d25cf0';
export default node;
