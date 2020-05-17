/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type quizUpdateQuestionMutationVariables = {
    questionID: string;
    question: string;
    modelAnswer: string;
};
export type quizUpdateQuestionMutationResponse = {
    readonly updateQuestion: {
        readonly question: {
            readonly id: string;
            readonly question: string;
            readonly modelAnswer: string;
        } | null;
    } | null;
};
export type quizUpdateQuestionMutation = {
    readonly response: quizUpdateQuestionMutationResponse;
    readonly variables: quizUpdateQuestionMutationVariables;
};



/*
mutation quizUpdateQuestionMutation(
  $questionID: ID!
  $question: String!
  $modelAnswer: String!
) {
  updateQuestion(input: {id: $questionID, question: $question, modelAnswer: $modelAnswer}) {
    question {
      id
      question
      modelAnswer
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "questionID",
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
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "questionID"
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
    "concreteType": "UpdateQuestionMutationPayload",
    "kind": "LinkedField",
    "name": "updateQuestion",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "QuestionNode",
        "kind": "LinkedField",
        "name": "question",
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
            "name": "question",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "modelAnswer",
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
    "name": "quizUpdateQuestionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "quizUpdateQuestionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "quizUpdateQuestionMutation",
    "operationKind": "mutation",
    "text": "mutation quizUpdateQuestionMutation(\n  $questionID: ID!\n  $question: String!\n  $modelAnswer: String!\n) {\n  updateQuestion(input: {id: $questionID, question: $question, modelAnswer: $modelAnswer}) {\n    question {\n      id\n      question\n      modelAnswer\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f7a65dbce2483f45b4b4f54794d065ab';
export default node;
