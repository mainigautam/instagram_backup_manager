const path = require("path");
const unzipper = require("unzipper");
var multer = require("multer");
const del = require("del");
const { create } = require("domain");
const { mkdir } = require("fs");

const uploadRoute = (app, fs) => {
  const DIR = "../temp/";

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

  app.post('/delete',(req,res)=>{
    del('../data/', {force : true})
    res.redirect('http://localhost:3000/')
  })

  app.post("/upload", upload.single("Upload"), function (req, res, next) {
    fs.createReadStream("../temp/bak.zip").pipe(
      unzipper.Extract({ path: "../data/" })
    );
    res.redirect("/profile");
  });
};

module.exports = uploadRoute;
