const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Hello world");
  console.log(req.user)
});

module.exports = router;