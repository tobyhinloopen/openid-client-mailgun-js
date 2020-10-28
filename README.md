# OpenID Connect + Mailgun = Error?

```sh
$ node main.js
AggregateError:
    RequestError: connect ECONNREFUSED 127.0.0.1:443
        at ClientRequest.<anonymous> (/Users/hinloopen/Projects/Github/openid-client-mailgun-js/node_modules/got/dist/source/core/index.js:953:111)
        at ClientRequest.origin.emit (/Users/hinloopen/Projects/Github/openid-client-mailgun-js/node_modules/@szmarczak/http-timer/dist/source/index.js:39:20)
    RequestError: connect ECONNREFUSED 127.0.0.1:443
        at ClientRequest.<anonymous> (/Users/hinloopen/Projects/Github/openid-client-mailgun-js/node_modules/got/dist/source/core/index.js:953:111)
        at ClientRequest.origin.emit (/Users/hinloopen/Projects/Github/openid-client-mailgun-js/node_modules/@szmarczak/http-timer/dist/source/index.js:39:20)
    at maybeSettle (/Users/hinloopen/Projects/Github/openid-client-mailgun-js/node_modules/p-some/index.js:31:11)
    at /Users/hinloopen/Projects/Github/openid-client-mailgun-js/node_modules/p-some/index.js:69:23
    at processTicksAndRejections (internal/process/task_queues.js:93:5) {
  name: 'AggregateError'
}
```

Tested using Node 12.13.1 & 14.13.1

## OK

```js
// require("mailgun-js");
const { Issuer } = require("openid-client");
Issuer.discover("https://accounts.google.com").then(console.log, console.error)
```

## OK

```js
require("mailgun-js");
const { Issuer } = require("openid-client");
// Issuer.discover("https://accounts.google.com").then(console.log, console.error)
```

## ERR

```js
require("mailgun-js");
const { Issuer } = require("openid-client");
Issuer.discover("https://accounts.google.com").then(console.log, console.error)
```

## Setup

```sh
npm init -y
npm install mailgun-js openid-client
node main.js
```
