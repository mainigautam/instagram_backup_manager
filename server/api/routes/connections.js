const connectionsRoute = (app,fs) => {

    const dataPath = "../data/connections.json"
    // READ
    app.get("/connections", (req, res) => {
      fs.readFile(dataPath, "utf8", (err, data) => {
        if (err) {
          throw err;
        }
        res.send(JSON.parse(data));
      });
    });
}
module.exports = connectionsRoute;