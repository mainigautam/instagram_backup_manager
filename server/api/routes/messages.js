const messageRoute = (app,fs) => {

    const dataPath = "../data/messages.json"
    // READ
    app.get("/messages", (req, res) => {
      fs.readFile(dataPath, "utf8", (err, data) => {
        if (fs.existsSync('../data/messages')) {
          res.send(fs.readdirSync('../data/messages/inbox'));
        }else if(fs.existsSync('../data/messages.json')){
          if (err) {
            throw err;
          }
    
          res.send(JSON.parse(data));
        }else{
          res.send("Error")
        }
      });
    });

    app.get('/message/v2/:id',(req,res)=>{
      fs.readFile(`../data/messages/inbox/${req.params.id}/message_1.json`,"utf-8", (err,data1)=>{
        if (err) {
          throw err;
        }
        res.send(JSON.parse(data1));
      })
    })
    app.get('/recipients',(req,res)=>{
      res.send(fs.readdirSync('../data/messages/inbox'));
    })
  };

module.exports = messageRoute;