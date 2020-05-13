/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type quizNextPhaseMutationVariables = {
    teamID: string;
};
export type quizNextPhaseMutationResponse = {
    readonly nextPhase: {
        readonly team: {
            readonly " $fragmentRefs": FragmentRefs<"QuizRenderer_team">;
        } | null;
    } | null;
};
export type quizNextPhaseMutation = {
    readonly response: quizNextPhaseMutationResponse;
    readonly variables: quizNextPhaseMutationVariables;
};



/*
mutation quizNextPhaseMutation(
  $teamID: ID!
) {
  nextPhase(input: {id: $teamID}) {
    team {
      ...QuizRenderer_team
      id
    }
  }
}

fragment QuizRenderer_team on TeamNode {
  id
  creator {
    username
    isMe
    id
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
  userQuestion {
    id
    question
    modelAnswer
  }
  currentQuestion {
    id
    question
    modelAnswer
    author {
      username
      lastName
      firstName
      id
    }
  }
  members {
    edges {
      node {
        username
        lastName
        firstName
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
    "name": "teamID",
    "type": "ID!"
  }
],
v1 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "teamID"
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
  "name": "username",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "question",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "modelAnswer",
  "storageKey": null
},
v7 = [
  (v3/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "lastName",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "firstName",
    "storageKey": null
  },
  (v2/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "quizNextPhaseMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "NextPhaseMutationPayload",
        "kind": "LinkedField",
        "name": "nextPhase",
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
                "args": null,
                "kind": "FragmentSpread",
                "name": "QuizRenderer_team"
              }
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
    "name": "quizNextPhaseMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "NextPhaseMutationPayload",
        "kind": "LinkedField",
        "name": "nextPhase",
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
              {
                "alias": null,
                "args": null,
                "concreteType": "UserNode",
                "kind": "LinkedField",
                "name": "creator",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isMe",
                    "storageKey": null
                  },
                  (v2/*: any*/)
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
              (v4/*: any*/),
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
                  (v4/*: any*/)
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
                "name": "userQuestion",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/)
                ],
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
                  (v5/*: any*/),
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "UserNode",
                    "kind": "LinkedField",
                    "name": "author",
                    "plural": false,
                    "selections": (v7/*: any*/),
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "UserNodeConnection",
                "kind": "LinkedField",
                "name": "members",
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
                        "selections": (v7/*: any*/),
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
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "quizNextPhaseMutation",
    "operationKind": "mutation",
    "text": "mutation quizNextPhaseMutation(\n  $teamID: ID!\n) {\n  nextPhase(input: {id: $teamID}) {\n    team {\n      ...QuizRenderer_team\n      id\n    }\n  }\n}\n\nfragment QuizRenderer_team on TeamNode {\n  id\n  creator {\n    username\n    isMe\n    id\n  }\n  createdAt\n  name\n  topic {\n    id\n    code\n    name\n  }\n  mode\n  state\n  userDone\n  userQuestion {\n    id\n    question\n    modelAnswer\n  }\n  currentQuestion {\n    id\n    question\n    modelAnswer\n    author {\n      username\n      lastName\n      firstName\n      id\n    }\n  }\n  members {\n    edges {\n      node {\n        username\n        lastName\n        firstName\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '00d8d195bd6e18f452e86f4bf3a37aaa';
export default node;
