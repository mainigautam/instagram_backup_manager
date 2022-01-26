const path = require('path');
const profileRoute = (app, fs) => {
    const dataPath = "../data/account_information/personal_information.json";
    app.get("/user", (req, res) => {
        fs.readFile(dataPath, "utf8", (err, data) => {
          if (err) {
            // console.error(err);
          }
          res.send(JSON.parse(data));
        });
      });
};
module.exports = profileRoute;