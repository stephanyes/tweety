const express = require("express");
const router = express.Router();
// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require("../twitterBank");

router.get("/special/:algo", function(req, res, next) {
  console.log(chalk.redBright(req.method + req.path + req.params.algo));
  next();
});
router.get("/special", function(req, res, next) {
  console.log(chalk.blueBright(req.method + req.path));
  next();
});
router.get("/style", function(req, res) {
  res.sendFile(
    "/Users/StephanYES/Desktop/Plataforma5/Bootcamp/tweety-js/tweety-js/public/stylesheets/style.css"
  );
});

router.get("/", function(req, res) {
  let tweets = tweetBank.list();
  res.render("index", { tweets: tweets });
});

// router.get("/", function(req, res, next) {
//   console.log(chalk.greenBright(req.method + req.path));
//   next();
// });

module.exports = router;
