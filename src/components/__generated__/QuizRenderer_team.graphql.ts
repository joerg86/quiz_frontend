/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AnswerScore = "A_0" | "A_1" | "A_3" | "%future added value";
export type TeamMode = "COMPETITION" | "TRAIN" | "%future added value";
export type TeamState = "ANSWER" | "ARCHIVED" | "DONE" | "OPEN" | "QUESTION" | "SCORING" | "%future added value";
export type QuizRenderer_team = {
    readonly id: string;
    readonly creator: {
        readonly id: string;
        readonly username: string;
        readonly firstName: string;
        readonly lastName: string;
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
    readonly currentQuestion: {
        readonly id: string;
        readonly question: string;
        readonly modelAnswer: string;
        readonly author: {
            readonly username: string;
            readonly lastName: string;
            readonly firstName: string;
            readonly isMe: boolean | null;
        };
        readonly answerSet: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly id: string;
                    readonly answer: string;
                    readonly score: AnswerScore | null;
                    readonly author: {
                        readonly username: string;
                        readonly lastName: string;
                        readonly firstName: string;
                        readonly isMe: boolean | null;
                    };
                } | null;
            } | null>;
        };
    } | null;
    readonly members: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
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
  "name": "firstName",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isMe",
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
  "concreteType": "UserNode",
  "kind": "LinkedField",
  "name": "author",
  "plural": false,
  "selections": [
    (v1/*: any*/),
    (v3/*: any*/),
    (v2/*: any*/),
    (v4/*: any*/)
  ],
  "storageKey": null
};
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
        (v0/*: any*/),
        (v1/*: any*/),
        (v2/*: any*/),
        (v3/*: any*/),
        (v4/*: any*/)
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
    (v5/*: any*/),
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
        (v5/*: any*/)
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
        (v0/*: any*/),
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
        (v6/*: any*/),
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
                    (v0/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "answer",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "score",
                      "storageKey": null
                    },
                    (v6/*: any*/)
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
              "selections": [
                (v0/*: any*/),
                (v1/*: any*/),
                (v3/*: any*/),
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
  "type": "TeamNode"
};
})();
(node as any).hash = '039d820bc9654be8080a1ec5475b90b6';
export default node;
