/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserBadge_user = {
    readonly firstName: string;
    readonly lastName: string;
    readonly " $refType": "UserBadge_user";
};
export type UserBadge_user$data = UserBadge_user;
export type UserBadge_user$key = {
    readonly " $data"?: UserBadge_user$data;
    readonly " $fragmentRefs": FragmentRefs<"UserBadge_user">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserBadge_user",
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
    }
  ],
  "type": "UserNode"
};
(node as any).hash = '1298ae5f93b349eaada1dc038532d8c9';
export default node;
