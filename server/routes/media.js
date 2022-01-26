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
}
module.exports = mediaRoute;