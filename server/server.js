const PORT = "8081";
const fs = require('fs');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const routes = require("./routes/routes.js")(app, fs);

app.listen(PORT,()=>{
    console.clear();
    console.log("IGBM is Running at Port http://localhost:8081/")
    console.log("\x1b[32mBy: Gautam Maini\nGithub: https://github.com/mainigautam\nTelegram: https://t.me/mainigautam\n\nDO NOT CLOSE THIS WINDOW UNLESS YOU ARE DONE LOOKING AT YOUR BACKUP")
})

app.use('/server.css' , express.static(__dirname + "/routes/static/server.css"));
app.use('/media/',express.static("../data/media"));
app.use('/photo/media/',express.static("../data/media"));
app.use('/direct/messages/inbox/',express.static("../data/messages/inbox"));
app.use('/messages/inbox/',express.static("../data/messages/inbox"));
app.use('/static/', express.static(__dirname+'/routes/build/static'));
app.use('/*/instagram-new.png',express.static(__dirname+'/routes/build/instagram-new.png'));
app.use('/instagram-new.png',express.static(__dirname+'/routes/build/instagram-new.png'));