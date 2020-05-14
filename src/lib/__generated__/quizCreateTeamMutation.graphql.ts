/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type quizCreateTeamMutationVariables = {
    topicId: string;
    name: string;
};
export type quizCreateTeamMutationResponse = {
    readonly createTeam: {
        readonly team: {
            readonly id: string;
            readonly name: string;
            readonly creator: {
                readonly username: string;
            };
            readonly createdAt: unknown;
        } | null;
    } | null;
};
export type quizCreateTeamMutation = {
    readonly response: quizCreateTeamMutationResponse;
    readonly variables: quizCreateTeamMutationVariables;
};



/*
mutation quizCreateTeamMutation(
  $topicId: ID!
  $name: String!
) {
  createTeam(input: {topicId: $topicId, name: $name}) {
    team {
      id
      name
      creator {
        username
        id
      }
      createdAt
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "topicId",
    "type": "ID!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name",
    "type": "String!"
  }
],
v1 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      },
      {
        "kind": "Variable",
        "name": "topicId",
        "variableName": "topicId"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "quizCreateTeamMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateTeamMutationPayload",
        "kind": "LinkedField",
        "name": "createTeam",
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
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "UserNode",
                "kind": "LinkedField",
                "name": "creator",
                "plural": false,
                "selections": [
                  (v4/*: any*/)
                ],
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "quizCreateTeamMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateTeamMutationPayload",
        "kind": "LinkedField",
        "name": "createTeam",
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
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "UserNode",
                "kind": "LinkedField",
                "name": "creator",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "quizCreateTeamMutation",
    "operationKind": "mutation",
    "text": "mutation quizCreateTeamMutation(\n  $topicId: ID!\n  $name: String!\n) {\n  createTeam(input: {topicId: $topicId, name: $name}) {\n    team {\n      id\n      name\n      creator {\n        username\n        id\n      }\n      createdAt\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '4fcc21ef377e228491034a64faeb7e52';
export default node;
