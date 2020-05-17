/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PlayPageQueryVariables = {
    id: string;
};
export type PlayPageQueryResponse = {
    readonly team: {
        readonly " $fragmentRefs": FragmentRefs<"QuizRenderer_team">;
    } | null;
};
export type PlayPageQuery = {
    readonly response: PlayPageQueryResponse;
    readonly variables: PlayPageQueryVariables;
};



/*
query PlayPageQuery(
  $id: ID!
) {
  team(id: $id) {
    ...QuizRenderer_team
    id
  }
}

fragment QuizRenderer_team on TeamNode {
  id
  creator {
    id
    username
    firstName
    lastName
    isMe
  }
  createdAt
  name
  topic {
    id
    code
    name
  }
  mode
  state
  userDone
  currentQuestion {
    id
    question
    modelAnswer
    author {
      username
      ...UserBadge_user
      isMe
      id
    }
    answerSet {
      edges {
        node {
          id
          answer
          score
          author {
            username
            lastName
            firstName
            isMe
            ...UserBadge_user
            id
          }
        }
      }
    }
  }
  questionCount
  questionNumber
  membershipSet {
    edges {
      node {
        id
        user {
          id
          username
          lastName
          firstName
          isMe
        }
        right
        wrong
        partial
        score
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
    "name": "id",
    "type": "ID!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
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
  "name": "username",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastName",
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
  "name": "score",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PlayPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "TeamNode",
        "kind": "LinkedField",
        "name": "team",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "QuizRenderer_team"
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
    "name": "PlayPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "TeamNode",
        "kind": "LinkedField",
        "name": "team",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "UserNode",
            "kind": "LinkedField",
            "name": "creator",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "createdAt",
            "storageKey": null
          },
          (v7/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "TopicNode",
            "kind": "LinkedField",
            "name": "topic",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "code",
                "storageKey": null
              },
              (v7/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "mode",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "state",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "userDone",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "QuestionNode",
            "kind": "LinkedField",
            "name": "currentQuestion",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "question",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "modelAnswer",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "UserNode",
                "kind": "LinkedField",
                "name": "author",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "AnswerNodeConnection",
                "kind": "LinkedField",
                "name": "answerSet",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AnswerNodeEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AnswerNode",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "answer",
                            "storageKey": null
                          },
                          (v8/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "UserNode",
                            "kind": "LinkedField",
                            "name": "author",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              (v5/*: any*/),
                              (v4/*: any*/),
                              (v6/*: any*/),
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
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "questionCount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "questionNumber",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "MembershipNodeConnection",
            "kind": "LinkedField",
            "name": "membershipSet",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "MembershipNodeEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MembershipNode",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "UserNode",
                        "kind": "LinkedField",
                        "name": "user",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v3/*: any*/),
                          (v5/*: any*/),
                          (v4/*: any*/),
                          (v6/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "right",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "wrong",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "partial",
                        "storageKey": null
                      },
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
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "PlayPageQuery",
    "operationKind": "query",
    "text": "query PlayPageQuery(\n  $id: ID!\n) {\n  team(id: $id) {\n    ...QuizRenderer_team\n    id\n  }\n}\n\nfragment QuizRenderer_team on TeamNode {\n  id\n  creator {\n    id\n    username\n    firstName\n    lastName\n    isMe\n  }\n  createdAt\n  name\n  topic {\n    id\n    code\n    name\n  }\n  mode\n  state\n  userDone\n  currentQuestion {\n    id\n    question\n    modelAnswer\n    author {\n      username\n      ...UserBadge_user\n      isMe\n      id\n    }\n    answerSet {\n      edges {\n        node {\n          id\n          answer\n          score\n          author {\n            username\n            lastName\n            firstName\n            isMe\n            ...UserBadge_user\n            id\n          }\n        }\n      }\n    }\n  }\n  questionCount\n  questionNumber\n  membershipSet {\n    edges {\n      node {\n        id\n        user {\n          id\n          username\n          lastName\n          firstName\n          isMe\n        }\n        right\n        wrong\n        partial\n        score\n      }\n    }\n  }\n}\n\nfragment UserBadge_user on UserNode {\n  firstName\n  lastName\n}\n"
  }
};
})();
(node as any).hash = '23086c44d84a9ae01039007378fd6732';
export default node;
