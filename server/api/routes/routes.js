const messageRoute = require("./messages");
const mediaRoute = require("./media");
const connectionsRoute = require("./connections");
const profileRoute = require("./profile");
const uploadRoute = require("./upload")
const path = require("path")

const appRouter = (app,fs) =>{
    app.get("/", (req,res)=> {
        res.sendFile(path.join(__dirname,'/server.html'));
    });
    messageRoute(app,fs);
    mediaRoute(app,fs)
    profileRoute(app,fs);
    connectionsRoute(app,fs);
    uploadRoute(app,fs);
};

module.exports = appRouter; 