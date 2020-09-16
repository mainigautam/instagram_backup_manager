const messageRoute = require("./messages");
const mediaRoute = require("./media");
const connectionsRoute = require("./connections");
const profileRoute = require("./profile");

const appRouter = (app,fs) =>{
    app.get("/", (req,res)=> {
        res.send("Serving The routes Now!");
    });
    messageRoute(app,fs);
    mediaRoute(app,fs)
    profileRoute(app,fs);
    connectionsRoute(app,fs);

};

module.exports = appRouter; 