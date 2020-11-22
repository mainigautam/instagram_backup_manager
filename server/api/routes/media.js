const mediaRoute = (app,fs) => {

    const dataPath = "../data/media.json"
    // READ
    app.get("/media", (req, res) => {
      fs.readFile(dataPath, "utf8", (err, data) => {
        if (err) {
          throw err;
        }
        res.send(JSON.parse(data));
      });
    });
}
module.exports = mediaRoute;