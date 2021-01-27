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

  app.get('/existing',(req,res)=>{
    if(fs.existsSync('../data')){
      res.send(true);
    }else{
      res.send(false);
    }
  });

  app.get('/v2',(req,res)=>{
    if(fs.existsSync('../data/messages')){
      res.send(true);
    }else{
      res.send(false);
    }
  });

  app.post('/delete',(req,res)=>{
    del('../data/', {force : true})
    del('../temp/bak.zip', {force : true})
    res.redirect('http://localhost:3000/upload')
  });

  app.post("/upload", upload.single("Upload"), function (req, res, next) {
    fs.createReadStream("../temp/bak.zip").pipe(
      unzipper.Extract({ path: "../data/" })
    );
    res.redirect("/profile");
  });
};

module.exports = uploadRoute;
