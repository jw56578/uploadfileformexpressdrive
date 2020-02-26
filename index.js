const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");

const { uploadFile } = require("./drive-api");

const app = express();
const port = process.env.PORT || 4001;

const upload = multer();
app.use(bodyParser.json())
app.use(express.static("public"))

//uploadFile("index.js");

app.post("*", upload.any(), (req, res) => {
  if (req.files && req.files.length > 0) {
    // save to google drive
    uploadFile(req.files[0]);
  }
  res.send("ok");

});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});