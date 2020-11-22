const messageRoute = (app,fs) => {

    const dataPath = "../data/messages.json"

    // READ
    app.get("/messages", (req, res) => {
      fs.readFile(dataPath, "utf8", (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });
  };

module.exports = messageRoute;