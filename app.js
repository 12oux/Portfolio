const express = require('express');
let session = require('express-session');
var path = require("path");
const port = 3000;

const app = express();
app.set("port", process.env.PORT || 3000);

app.set("views", path.join(__dirname, "/src/views"));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// server.listen("port", process.env.PORT || 3000);

const route = require("./src/routes/site");


app.use(route);

app.listen(port, () => {
    console.log('portfolio listening at http://localhost:${port}');
});

module.exports = app;