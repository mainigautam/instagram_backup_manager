const messageRoute = (app,fs) => {
    app.get('/messages/:id',(req,res)=>{
      fs.readFile(`../data/messages/inbox/${req.params.id}/message_1.json`,"utf-8", (err,data1)=>{
        if (err) {
          throw err;
        }
        res.send(JSON.parse(data1));
      })
    })
    app.get('/recipients',(req,res)=>{
      if(fs.existsSync('../data/messages/inbox')){
        res.send(fs.readdirSync('../data/messages/inbox'));
      }else{
        res.json("No messages to show in this Backup")
      }
    })
  };

module.exports = messageRoute;