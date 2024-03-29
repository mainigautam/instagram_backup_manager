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
    fs.createReadStream('./temp/bak.zip')
    .pipe(unzipper.Extract({path: '../data/'}))
    .promise()
    .then( () => res.redirect('/'), e => console.log('error',e));
  });

  app.get("/existing", (req, res) => {
    if (fs.existsSync("../data/")) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
  app.get('/isCompactible',(req,res)=>{
    if (fs.existsSync('../data/index.html')) {
      res.send(false);
    } else {
      res.send(true);
    }
  })
  app.post("/delete", (req, res) => {
    del("../data/", { force: true });
    del("./temp/bak.zip", { force: true });
    res.sendFile(path.join(__dirname,'/static/delete.html'));
  });
};

module.exports = uploadRoute;
