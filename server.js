var express = require ("express");
var bodyparser = require("bodyparser");
var path = require("path");
var app= express();
var PORT = process.env.PORT ||3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.text());
app.use(bodyparser.json({type: "application/vnd.api+json"}));

app.listen(PORT, function() {console.log("the app is listening on port" + PORT);});

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);
