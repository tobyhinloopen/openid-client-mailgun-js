require("mailgun-js");
const { Issuer } = require("openid-client");
Issuer.discover("https://accounts.google.com").then(console.log, console.error)
