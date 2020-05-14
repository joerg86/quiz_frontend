/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type NavQueryVariables = {};
export type NavQueryResponse = {
    readonly me: {
        readonly firstName: string;
        readonly lastName: string;
    } | null;
};
export type NavQuery = {
    readonly response: NavQueryResponse;
    readonly variables: NavQueryVariables;
};



/*
query NavQuery {
  me {
    firstName
    lastName
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastName",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "NavQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserNode",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "NavQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserNode",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
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
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "NavQuery",
    "operationKind": "query",
    "text": "query NavQuery {\n  me {\n    firstName\n    lastName\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '3ea1ac3537745e0337b48dcd868d4d6d';
export default node;
