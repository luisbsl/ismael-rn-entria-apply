/**
 * @flow
 * @relayHash 660292e39dd6b08eac87e7754f109c83
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MemberFlatlist_organization$ref = any;
export type OrganizationScreenQueryVariables = {||};
export type OrganizationScreenQueryResponse = {|
  +organization: ?{|
    +$fragmentRefs: MemberFlatlist_organization$ref
  |}
|};
*/


/*
query OrganizationScreenQuery {
  organization(login: "entria") {
    ...MemberFlatlist_organization
    id
  }
}

fragment MemberFlatlist_organization on Organization {
  id
  members(first: 10) {
    edges {
      node {
        ...MemberCard_member
        id
      }
    }
  }
}

fragment MemberCard_member on User {
  id
  login
  name
  avatarUrl
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "login",
    "value": "entria",
    "type": "String!"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "OrganizationScreenQuery",
  "id": null,
  "text": "query OrganizationScreenQuery {\n  organization(login: \"entria\") {\n    ...MemberFlatlist_organization\n    id\n  }\n}\n\nfragment MemberFlatlist_organization on Organization {\n  id\n  members(first: 10) {\n    edges {\n      node {\n        ...MemberCard_member\n        id\n      }\n    }\n  }\n}\n\nfragment MemberCard_member on User {\n  id\n  login\n  name\n  avatarUrl\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "OrganizationScreenQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "organization",
        "storageKey": "organization(login:\"entria\")",
        "args": v0,
        "concreteType": "Organization",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "MemberFlatlist_organization",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "OrganizationScreenQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "organization",
        "storageKey": "organization(login:\"entria\")",
        "args": v0,
        "concreteType": "Organization",
        "plural": false,
        "selections": [
          v1,
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
                      v1,
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
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0db1658e7caf4e320465eecfac2eea33';
module.exports = node;
