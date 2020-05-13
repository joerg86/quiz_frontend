/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type quizPostQuestionMutationVariables = {
    teamID: string;
    question: string;
    modelAnswer: string;
};
export type quizPostQuestionMutationResponse = {
    readonly postQuestion: {
        readonly team: {
            readonly " $fragmentRefs": FragmentRefs<"QuizRenderer_team">;
        } | null;
    } | null;
};
export type quizPostQuestionMutation = {
    readonly response: quizPostQuestionMutationResponse;
    readonly variables: quizPostQuestionMutationVariables;
};



/*
mutation quizPostQuestionMutation(
  $teamID: ID!
  $question: String!
  $modelAnswer: String!
) {
  postQuestion(input: {id: $teamID, question: $question, modelAnswer: $modelAnswer}) {
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
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "question",
    "type": "String!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "modelAnswer",
    "type": "String!"
  }
],
v1 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "teamID"
      },
      {
        "kind": "Variable",
        "name": "modelAnswer",
        "variableName": "modelAnswer"
      },
      {
        "kind": "Variable",
        "name": "question",
        "variableName": "question"
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
    "name": "quizPostQuestionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "PostQuestionMutationPayload",
        "kind": "LinkedField",
        "name": "postQuestion",
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
    "name": "quizPostQuestionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "PostQuestionMutationPayload",
        "kind": "LinkedField",
        "name": "postQuestion",
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
    "name": "quizPostQuestionMutation",
    "operationKind": "mutation",
    "text": "mutation quizPostQuestionMutation(\n  $teamID: ID!\n  $question: String!\n  $modelAnswer: String!\n) {\n  postQuestion(input: {id: $teamID, question: $question, modelAnswer: $modelAnswer}) {\n    team {\n      ...QuizRenderer_team\n      id\n    }\n  }\n}\n\nfragment QuizRenderer_team on TeamNode {\n  id\n  creator {\n    username\n    isMe\n    id\n  }\n  createdAt\n  name\n  topic {\n    id\n    code\n    name\n  }\n  mode\n  state\n  userDone\n  userQuestion {\n    id\n    question\n    modelAnswer\n  }\n  currentQuestion {\n    id\n    question\n    modelAnswer\n    author {\n      username\n      lastName\n      firstName\n      id\n    }\n  }\n  members {\n    edges {\n      node {\n        username\n        lastName\n        firstName\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ee8dd2d1c030d5a2e01caeddfcd623eb';
export default node;
