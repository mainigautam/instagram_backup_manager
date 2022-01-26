const path = require('path');
const profileRoute = require('./profile')
const mediaRoute = require('./media');
const messageRoute = require('./messages');
const uploadRoute = require('./upload');
const connectionRoute = require('./connection.js') 
const routes = (app, fs) => {
    app.get("/", (req,res)=> {
        res.sendFile(path.join(__dirname,'/build/index.html'));
    });
    app.get("/direct", (req,res)=> {
        res.sendFile(path.join(__dirname,'/build/index.html'));
    });
    app.get("/media", (req,res)=> {
        res.sendFile(path.join(__dirname,'/build/index.html'));
    });
    app.get("/photo/:id/", (req,res)=> {
        res.sendFile(path.join(__dirname,'/build/index.html'));
    });
    app.get("/reels", (req,res)=> {
        res.sendFile(path.join(__dirname,'/build/index.html'));
    });
    app.get('/dev',(req,res)=>{
        res.sendFile(path.join(__dirname+'/static/uploaded.html'))
    })
    profileRoute(app,fs);
    mediaRoute(app,fs);
    messageRoute(app,fs);
    uploadRoute(app,fs);
    connectionRoute(app,fs);
};
module.exports = routes;    