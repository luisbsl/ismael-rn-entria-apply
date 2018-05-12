/**
 * @flow
 * @relayHash 08a6b2934decf335c22fb9315506f708
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MemberDetail_member$ref = any;
export type MemberScreenQueryVariables = {|
  memberLogin: string
|};
export type MemberScreenQueryResponse = {|
  +user: ?{|
    +$fragmentRefs: MemberDetail_member$ref
  |}
|};
*/


/*
query MemberScreenQuery(
  $memberLogin: String!
) {
  user(login: $memberLogin) {
    ...MemberDetail_member
    id
  }
}

fragment MemberDetail_member on User {
  id
  login
  name
  avatarUrl
  bio
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "memberLogin",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "login",
    "variableName": "memberLogin",
    "type": "String!"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "MemberScreenQuery",
  "id": null,
  "text": "query MemberScreenQuery(\n  $memberLogin: String!\n) {\n  user(login: $memberLogin) {\n    ...MemberDetail_member\n    id\n  }\n}\n\nfragment MemberDetail_member on User {\n  id\n  login\n  name\n  avatarUrl\n  bio\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "MemberScreenQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": v1,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "MemberDetail_member",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MemberScreenQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": v1,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "login",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "avatarUrl",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "bio",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '924e7ebe5758218beaec3f163fea2fdc';
module.exports = node;
