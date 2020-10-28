# OpenID Connect + Mailgun = Error?

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
