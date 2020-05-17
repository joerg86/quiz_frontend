/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type KBPageQueryVariables = {};
export type KBPageQueryResponse = {
    readonly topics: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly name: string;
                readonly code: string;
                readonly questionCount: number | null;
            } | null;
        } | null>;
    } | null;
};
export type KBPageQuery = {
    readonly response: KBPageQueryResponse;
    readonly variables: KBPageQueryVariables;
};



/*
query KBPageQuery {
  topics(first: 20, orderBy: "-questionCount") {
    edges {
      node {
        id
        name
        code
        questionCount
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 20
      },
      {
        "kind": "Literal",
        "name": "orderBy",
        "value": "-questionCount"
      }
    ],
    "concreteType": "TopicNodeConnection",
    "kind": "LinkedField",
    "name": "topics",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TopicNodeEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TopicNode",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "code",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "questionCount",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "topics(first:20,orderBy:\"-questionCount\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "KBPageQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "KBPageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "KBPageQuery",
    "operationKind": "query",
    "text": "query KBPageQuery {\n  topics(first: 20, orderBy: \"-questionCount\") {\n    edges {\n      node {\n        id\n        name\n        code\n        questionCount\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'd9dc5147d11c4a0692631422047d1b0f';
export default node;
