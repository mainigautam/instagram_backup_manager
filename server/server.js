const express = require('express')
const app = express();
const fs = require("fs");
const bodyParser = require('body-parser');
const port = 9000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Define Rouotes in a seperate file
const routes = require("./api/routes/routes.js")(app, fs);

app.listen(port, ()=>{
    console.log("Server is Up And Running , We are Serving Files Now!")
});

app.use('/stories/' , express.static("../data/stories"));
app.use('/photos/' , express.static("../data/photos"));
app.use('/videos/', express.static('../data/videos'))
app.use('/photo/:id' , express.static("../data/photos"));
app.use('/photo/:id' , express.static("../data/profile"));
app.use('/profile/' , express.static("../data/profile"));
app.use('/direct/direct/' , express.static("../data/direct"));
app.use('/server.css' , express.static(__dirname + "/api/routes/server.css"))
app.use('/messages/inbox/',express.static('../data/messages/inbox'));