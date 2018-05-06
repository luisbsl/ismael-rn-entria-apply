/**
 * @flow
 * @relayHash a1248e75a23a381e0be79c2bb4fb14fd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +organization: ?{|
    +members: {|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +login: string,
          +name: ?string,
          +avatarUrl: any,
        |}
      |}>
    |}
  |}
|};
*/


/*
query AppQuery {
  organization(login: "entria") {
    members(first: 10) {
      edges {
        node {
          login
          name
          avatarUrl
          id
        }
      }
    }
    id
  }
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
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10,
    "type": "Int"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "login",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatarUrl",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AppQuery",
  "id": null,
  "text": "query AppQuery {\n  organization(login: \"entria\") {\n    members(first: 10) {\n      edges {\n        node {\n          login\n          name\n          avatarUrl\n          id\n        }\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
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
            "kind": "LinkedField",
            "alias": null,
            "name": "members",
            "storageKey": "members(first:10)",
            "args": v1,
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
                      v2,
                      v3,
                      v4
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
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
            "kind": "LinkedField",
            "alias": null,
            "name": "members",
            "storageKey": "members(first:10)",
            "args": v1,
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
                      v2,
                      v3,
                      v4,
                      v5
                    ]
                  }
                ]
              }
            ]
          },
          v5
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3968f623943b138d7c1ab6fcb09831a8';
module.exports = node;
