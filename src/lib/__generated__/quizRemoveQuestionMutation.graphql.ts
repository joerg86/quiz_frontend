/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type quizRemoveQuestionMutationVariables = {
    questionID: string;
};
export type quizRemoveQuestionMutationResponse = {
    readonly removeQuestion: {
        readonly question: {
            readonly id: string;
        } | null;
    } | null;
};
export type quizRemoveQuestionMutation = {
    readonly response: quizRemoveQuestionMutationResponse;
    readonly variables: quizRemoveQuestionMutationVariables;
};



/*
mutation quizRemoveQuestionMutation(
  $questionID: ID!
) {
  removeQuestion(input: {id: $questionID}) {
    question {
      id
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
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "RemoveQuestionMutationPayload",
    "kind": "LinkedField",
    "name": "removeQuestion",
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
    "name": "quizRemoveQuestionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "quizRemoveQuestionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "quizRemoveQuestionMutation",
    "operationKind": "mutation",
    "text": "mutation quizRemoveQuestionMutation(\n  $questionID: ID!\n) {\n  removeQuestion(input: {id: $questionID}) {\n    question {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'dc77d4774663d662f4e343e9c67e1cf4';
export default node;
