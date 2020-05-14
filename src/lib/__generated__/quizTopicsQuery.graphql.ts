/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type quizTopicsQueryVariables = {
    query: string;
};
export type quizTopicsQueryResponse = {
    readonly topics: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly name: string;
                readonly code: string;
                readonly id: string;
            } | null;
        } | null>;
    } | null;
};
export type quizTopicsQuery = {
    readonly response: quizTopicsQueryResponse;
    readonly variables: quizTopicsQueryVariables;
};



/*
query quizTopicsQuery(
  $query: String!
) {
  topics(query: $query) {
    edges {
      node {
        name
        code
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "query",
        "variableName": "query"
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "quizTopicsQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "quizTopicsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "quizTopicsQuery",
    "operationKind": "query",
    "text": "query quizTopicsQuery(\n  $query: String!\n) {\n  topics(query: $query) {\n    edges {\n      node {\n        name\n        code\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '005f0b78c80e524ae12a0b981182e548';
export default node;
