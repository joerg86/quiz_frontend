/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type KBBrowsePageTopicQueryVariables = {
    topicID: string;
};
export type KBBrowsePageTopicQueryResponse = {
    readonly topic: {
        readonly name: string;
        readonly code: string;
    } | null;
};
export type KBBrowsePageTopicQuery = {
    readonly response: KBBrowsePageTopicQueryResponse;
    readonly variables: KBBrowsePageTopicQueryVariables;
};



/*
query KBBrowsePageTopicQuery(
  $topicID: ID!
) {
  topic(id: $topicID) {
    name
    code
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "topicID",
    "type": "ID!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "topicID"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
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
    "name": "KBBrowsePageTopicQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "TopicNode",
        "kind": "LinkedField",
        "name": "topic",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
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
    "name": "KBBrowsePageTopicQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "TopicNode",
        "kind": "LinkedField",
        "name": "topic",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
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
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "KBBrowsePageTopicQuery",
    "operationKind": "query",
    "text": "query KBBrowsePageTopicQuery(\n  $topicID: ID!\n) {\n  topic(id: $topicID) {\n    name\n    code\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '6c346e40e40678f557f612fcafbb9819';
export default node;
