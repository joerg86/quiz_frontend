/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type KBBrowsePageQueryVariables = {
    topicID?: string | null;
    query?: string | null;
    own?: boolean | null;
};
export type KBBrowsePageQueryResponse = {
    readonly questions: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly question: string;
                readonly modelAnswer: string;
                readonly author: {
                    readonly email: string;
                    readonly isMe: boolean | null;
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
export type KBBrowsePageQuery = {
    readonly response: KBBrowsePageQueryResponse;
    readonly variables: KBBrowsePageQueryVariables;
};



/*
query KBBrowsePageQuery(
  $topicID: ID
  $query: String
  $own: Boolean
) {
  questions(topic: $topicID, query: $query, own: $own) {
    edges {
      node {
        id
        question
        modelAnswer
        author {
          ...UserBadge_user
          email
          isMe
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
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "topicID",
    "type": "ID"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "query",
    "type": "String"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "own",
    "type": "Boolean"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "own",
    "variableName": "own"
  },
  {
    "kind": "Variable",
    "name": "query",
    "variableName": "query"
  },
  {
    "kind": "Variable",
    "name": "topic",
    "variableName": "topicID"
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
  "name": "question",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "modelAnswer",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isMe",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "code",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "KBBrowsePageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "QuestionNodeConnection",
        "kind": "LinkedField",
        "name": "questions",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "QuestionNodeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "QuestionNode",
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
                    "concreteType": "UserNode",
                    "kind": "LinkedField",
                    "name": "author",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      (v6/*: any*/),
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
                      (v7/*: any*/),
                      (v8/*: any*/)
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "KBBrowsePageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "QuestionNodeConnection",
        "kind": "LinkedField",
        "name": "questions",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "QuestionNodeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "QuestionNode",
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
                    "concreteType": "UserNode",
                    "kind": "LinkedField",
                    "name": "author",
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
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v2/*: any*/)
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
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v2/*: any*/)
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
    "name": "KBBrowsePageQuery",
    "operationKind": "query",
    "text": "query KBBrowsePageQuery(\n  $topicID: ID\n  $query: String\n  $own: Boolean\n) {\n  questions(topic: $topicID, query: $query, own: $own) {\n    edges {\n      node {\n        id\n        question\n        modelAnswer\n        author {\n          ...UserBadge_user\n          email\n          isMe\n          id\n        }\n        topic {\n          name\n          code\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment UserBadge_user on UserNode {\n  firstName\n  lastName\n}\n"
  }
};
})();
(node as any).hash = '69018ffaf1979a3d562dbdf242ae75df';
export default node;
