const profileRoute = (app,fs) => {

    const dataPath = "../data/profile.json"
    // READ
    app.get("/profile", (req, res) => {
      fs.readFile(dataPath, "utf8", (err, data) => {
        if (err) {
          throw err;
        }
        res.send(JSON.parse(data));
      });
    });
}
module.exports = profileRoute;