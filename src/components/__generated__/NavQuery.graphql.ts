/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type NavQueryVariables = {};
export type NavQueryResponse = {
    readonly me: {
        readonly firstName: string;
        readonly lastName: string;
        readonly " $fragmentRefs": FragmentRefs<"UserBadge_user">;
    } | null;
};
export type NavQuery = {
    readonly response: NavQueryResponse;
    readonly variables: NavQueryVariables;
};



/*
query NavQuery {
  me {
    ...UserBadge_user
    firstName
    lastName
    id
  }
}

fragment UserBadge_user on UserNode {
  firstName
  lastName
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
          (v1/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "UserBadge_user"
          }
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
    "text": "query NavQuery {\n  me {\n    ...UserBadge_user\n    firstName\n    lastName\n    id\n  }\n}\n\nfragment UserBadge_user on UserNode {\n  firstName\n  lastName\n}\n"
  }
};
})();
(node as any).hash = 'd201fd61f94f04a1b9d334efb7d9fa09';
export default node;
