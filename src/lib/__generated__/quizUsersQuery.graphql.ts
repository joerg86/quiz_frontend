/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type quizUsersQueryVariables = {
    query: string;
};
export type quizUsersQueryResponse = {
    readonly users: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly firstName: string;
                readonly lastName: string;
                readonly username: string;
            } | null;
        } | null>;
    } | null;
};
export type quizUsersQuery = {
    readonly response: quizUsersQueryResponse;
    readonly variables: quizUsersQueryVariables;
};



/*
query quizUsersQuery(
  $query: String!
) {
  users(username_Icontains: $query) {
    edges {
      node {
        firstName
        lastName
        username
        id
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "query",
    "type": "String!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "username_Icontains",
    "variableName": "query"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "quizUsersQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UserNodeConnection",
        "kind": "LinkedField",
        "name": "users",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "UserNodeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "UserNode",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "quizUsersQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UserNodeConnection",
        "kind": "LinkedField",
        "name": "users",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "UserNodeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "UserNode",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
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
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "quizUsersQuery",
    "operationKind": "query",
    "text": "query quizUsersQuery(\n  $query: String!\n) {\n  users(username_Icontains: $query) {\n    edges {\n      node {\n        firstName\n        lastName\n        username\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b86eee96b6a63751b4c6ac8e175664e8';
export default node;
