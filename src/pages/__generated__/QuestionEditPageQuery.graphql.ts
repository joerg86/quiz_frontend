/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type QuestionEditPageQueryVariables = {
    questionID: string;
};
export type QuestionEditPageQueryResponse = {
    readonly question: {
        readonly id: string;
        readonly question: string;
        readonly modelAnswer: string;
        readonly topic: {
            readonly name: string;
            readonly code: string;
        };
    } | null;
};
export type QuestionEditPageQuery = {
    readonly response: QuestionEditPageQueryResponse;
    readonly variables: QuestionEditPageQueryVariables;
};



/*
query QuestionEditPageQuery(
  $questionID: ID!
) {
  question(id: $questionID) {
    id
    question
    modelAnswer
    topic {
      name
      code
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
    "kind": "Variable",
    "name": "id",
    "variableName": "questionID"
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
  "name": "name",
  "storageKey": null
},
v6 = {
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
    "name": "QuestionEditPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "QuestionNode",
        "kind": "LinkedField",
        "name": "question",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "TopicNode",
            "kind": "LinkedField",
            "name": "topic",
            "plural": false,
            "selections": [
              (v5/*: any*/),
              (v6/*: any*/)
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
    "name": "QuestionEditPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "QuestionNode",
        "kind": "LinkedField",
        "name": "question",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "TopicNode",
            "kind": "LinkedField",
            "name": "topic",
            "plural": false,
            "selections": [
              (v5/*: any*/),
              (v6/*: any*/),
              (v2/*: any*/)
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
    "name": "QuestionEditPageQuery",
    "operationKind": "query",
    "text": "query QuestionEditPageQuery(\n  $questionID: ID!\n) {\n  question(id: $questionID) {\n    id\n    question\n    modelAnswer\n    topic {\n      name\n      code\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '38c835c436f373804361135992772e09';
export default node;
