var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var PORT = process.env.PORT || 7000;


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/restful_blog_app";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
})

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
});
