const path = require("path");
const unzipper = require("unzipper");
var multer = require("multer");
const del = require("del");

const uploadRoute = (app, fs) => {
  const DIR = "./temp/";

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      cb(null, "bak" + path.extname(file.originalname));
    },
  });

  var upload = multer({
    storage: storage,
  });

  app.post("/upload", upload.single("Upload"), (req, res, next) => {
    fs.createReadStream("./temp/bak.zip").pipe(
      unzipper.Extract({ path: "../data/" })
    )
    res.sendFile(path.join(__dirname+"/static/uploaded.html"));
  });

  app.get("/existing", (req, res) => {
    if (fs.existsSync("../data/")) {
      res.send(true);
    } else {
      res.send(false);
    }
  });

  app.post("/delete", (req, res) => {
    del("../data/", { force: true });
    del("./temp/bak.zip", { force: true });
    res.sendFile(path.join(__dirname,'/static/delete.html'));
  });
};

module.exports = uploadRoute;
