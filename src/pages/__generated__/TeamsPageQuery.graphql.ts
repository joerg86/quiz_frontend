/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TeamMode = "COMPETITION" | "TRAIN" | "%future added value";
export type TeamState = "ANSWER" | "ARCHIVED" | "DONE" | "OPEN" | "QUESTION" | "SCORING" | "%future added value";
export type TeamsPageQueryVariables = {};
export type TeamsPageQueryResponse = {
    readonly teams: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly name: string;
                readonly mode: TeamMode;
                readonly state: TeamState;
                readonly createdAt: unknown;
                readonly creator: {
                    readonly " $fragmentRefs": FragmentRefs<"UserBadge_user">;
                };
                readonly topic: {
                    readonly name: string;
                    readonly code: string;
                };
            } | null;
        } | null>;
    } | null;
};
export type TeamsPageQuery = {
    readonly response: TeamsPageQueryResponse;
    readonly variables: TeamsPageQueryVariables;
};



/*
query TeamsPageQuery {
  teams {
    edges {
      node {
        id
        name
        mode
        state
        createdAt
        creator {
          ...UserBadge_user
          id
        }
        topic {
          name
          code
          id
        }
      }
    }
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
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "mode",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "state",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "code",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TeamsPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TeamNodeConnection",
        "kind": "LinkedField",
        "name": "teams",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TeamNodeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "TeamNode",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "UserNode",
                    "kind": "LinkedField",
                    "name": "creator",
                    "plural": false,
                    "selections": [
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "UserBadge_user"
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TopicNode",
                    "kind": "LinkedField",
                    "name": "topic",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      (v5/*: any*/)
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
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TeamsPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TeamNodeConnection",
        "kind": "LinkedField",
        "name": "teams",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TeamNodeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "TeamNode",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "UserNode",
                    "kind": "LinkedField",
                    "name": "creator",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "firstName",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "lastName",
                        "storageKey": null
                      },
                      (v0/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TopicNode",
                    "kind": "LinkedField",
                    "name": "topic",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      (v5/*: any*/),
                      (v0/*: any*/)
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "TeamsPageQuery",
    "operationKind": "query",
    "text": "query TeamsPageQuery {\n  teams {\n    edges {\n      node {\n        id\n        name\n        mode\n        state\n        createdAt\n        creator {\n          ...UserBadge_user\n          id\n        }\n        topic {\n          name\n          code\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment UserBadge_user on UserNode {\n  firstName\n  lastName\n}\n"
  }
};
})();
(node as any).hash = 'eead38a8f7f6245102496f9a53aee2bc';
export default node;
