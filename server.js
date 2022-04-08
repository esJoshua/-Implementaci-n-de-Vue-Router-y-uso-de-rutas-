const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
let history = require("connect-history-api-fallback");
app = express();
app.use(history());
app.use(serveStatic(path.join(__dirname, "dist")));
const port = process.env.PORT || 3000;
app.listen(port);
/* app.get("/*", (req, res) => res.redirect("/index.html"));*/
console.log("servidor corriendo en: ", port);
