/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type MemberCard_member$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MemberFlatlist_organization$ref: FragmentReference;
export type MemberFlatlist_organization = {|
  +id: string,
  +members: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +$fragmentRefs: MemberCard_member$ref
      |}
    |}>
  |},
  +$refType: MemberFlatlist_organization$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "MemberFlatlist_organization",
  "type": "Organization",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "members",
      "storageKey": "members(first:10)",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 10,
          "type": "Int"
        }
      ],
      "concreteType": "UserConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "UserEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "User",
              "plural": false,
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "MemberCard_member",
                  "args": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '10ea1d12c6f85a6fa12c2e8de083b018';
module.exports = node;
