const mediaRoute = (app,fs)=>{
    const dataPath = "../data/content/";
    app.get("/content/:demand", (req, res) => {
      const pseudoData = {undefined: true};
        fs.readFile(`${dataPath}${req.params.demand}`, "utf8", (err, data) => {
          if (err) {
            res.send(pseudoData);
            // console.error(err);
          }else{
            res.send(JSON.parse(data));
          }
        });
      });
    app.get('/direct-media-photos/:id',(req,res)=>{
      if(fs.existsSync(`../data/messages/inbox/${req.params.id}/photos`)){
        res.send(fs.readdirSync(`../data/messages/inbox/${req.params.id}/photos`));
      }else{
        res.json("No photos to show in this chat")
      }
    })
    app.get('/direct-media-videos/:id',(req,res)=>{
      if(fs.existsSync(`../data/messages/inbox/${req.params.id}/videos`)){
        res.send(fs.readdirSync(`../data/messages/inbox/${req.params.id}/videos`));
      }else{
        res.json("No videos to show in this chat")
      }
    })
}
module.exports = mediaRoute;