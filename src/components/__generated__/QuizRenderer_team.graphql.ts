/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TeamMode = "COMPETITION" | "TRAIN" | "%future added value";
export type TeamState = "ANSWER" | "ARCHIVED" | "DONE" | "OPEN" | "QUESTION" | "SCORING" | "%future added value";
export type QuizRenderer_team = {
    readonly id: string;
    readonly creator: {
        readonly username: string;
        readonly isMe: boolean | null;
    };
    readonly createdAt: unknown;
    readonly name: string;
    readonly topic: {
        readonly id: string;
        readonly code: string;
        readonly name: string;
    };
    readonly mode: TeamMode;
    readonly state: TeamState;
    readonly userDone: boolean | null;
    readonly userQuestion: {
        readonly id: string;
        readonly question: string;
        readonly modelAnswer: string;
    } | null;
    readonly currentQuestion: {
        readonly id: string;
        readonly question: string;
        readonly modelAnswer: string;
        readonly author: {
            readonly username: string;
            readonly lastName: string;
            readonly firstName: string;
        };
    } | null;
    readonly members: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly username: string;
                readonly lastName: string;
                readonly firstName: string;
            } | null;
        } | null>;
    };
    readonly " $refType": "QuizRenderer_team";
};
export type QuizRenderer_team$data = QuizRenderer_team;
export type QuizRenderer_team$key = {
    readonly " $data"?: QuizRenderer_team$data;
    readonly " $fragmentRefs": FragmentRefs<"QuizRenderer_team">;
};



const node: ReaderFragment = (function(){
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
  "name": "username",
  "storageKey": null
},
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
v5 = [
  (v1/*: any*/),
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
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "QuizRenderer_team",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "UserNode",
      "kind": "LinkedField",
      "name": "creator",
      "plural": false,
      "selections": [
        (v1/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isMe",
          "storageKey": null
        }
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
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "TopicNode",
      "kind": "LinkedField",
      "name": "topic",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "code",
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
        (v0/*: any*/),
        (v3/*: any*/),
        (v4/*: any*/)
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
        (v0/*: any*/),
        (v3/*: any*/),
        (v4/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "UserNode",
          "kind": "LinkedField",
          "name": "author",
          "plural": false,
          "selections": (v5/*: any*/),
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
              "selections": (v5/*: any*/),
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TeamNode"
};
})();
(node as any).hash = '135df49e75248ae7a70f62922c10b754';
export default node;
