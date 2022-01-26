const connectionRoute = (app,fs)=>{
    const dataPath = "../data/followers_and_following/";
    const pseudoData = {undefined:true};
    app.get("/connections/:demand", (req, res) => {
        fs.readFile(`${dataPath}${req.params.demand}`, "utf8", (err, data) => {
          if (err) {
            res.send(pseudoData);
            // console.error(err);
          }else{
            res.send(JSON.parse(data));
          }
        });
      });
}
module.exports = connectionRoute;   