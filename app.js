const express = require("express");
const app = express();
const chalk = require("chalk");

//Middleware
// let middle = (req, res, next) => {
//   var algo = req.path;
//   var metodo = req.method;
//   console.log(chalk.greenBright(`${metodo}${algo}`));
//   next();
// };

// let segundoMiddle = (req, res, next) => {
//   var specialURI = req.params.algo;
//   var metodo = req.method;
//   console.log(chalk.blueBright(`${metodo}${specialURI}`));
// };

//Use para cualquier tipo de request ----> esto es un middleware
app.use("/", function(req, res, next) {
  console.log(chalk.greenBright(req.method + req.path));
  next();
});

app.use("/special" || "/special/:algo", function(req, res, next) {
  console.log(chalk.blueBright(req.method + req.path));
  next();
});

//IGNORAR LO DE ABAJO POR AHORA//
//IGNORAR LO DE ABAJO POR AHORA//
//IGNORAR LO DE ABAJO POR AHORA//

//IGNORAR LO DE ABAJO POR AHORA//
//IGNORAR LO DE ABAJO POR AHORA//
//IGNORAR LO DE ABAJO POR AHORA//
//IGNORAR LO DE ABAJO POR AHORA//
//IGNORAR LO DE ABAJO POR AHORA//
//IGNORAR LO DE ABAJO POR AHORA//
//IGNORAR LO DE ABAJO POR AHORA//
//IGNORAR LO DE ABAJO POR AHORA//
//IGNORAR LO DE ABAJO POR AHORA//
//IGNORAR LO DE ABAJO POR AHORA//
//IGNORAR LO DE ABAJO POR AHORA//
//IGNORAR LO DE ABAJO POR AHORA//
//IGNORAR LO DE ABAJO POR AHORA//

//IGNORAR LO DE ABAJO POR AHORA//

//Middleware para path /special
// app.get("/special", function(req, res) {
//   res.send("estas entrando en una zona especial");
//   console.log(req.method + req.path + req.params.algo);
// });

// app.use("/special", segundoMiddle, function(req, res) {
//   res.send("Estamos entrando en una zona especial");
// });

// app.get("", middle, function(req, res) {
//   res.send("ESTAS EN HOME");
// });

// app.get("/:algo", middle, function(req, res) {
//   let algo = req.params.algo;
//   let metodo = req.method;
//   res.send();
// });

// app.post("/:cosas", function(req, res) {
//   let cosas = req.params.cosas;
//   let metodo = req.method;
//   res.send(`${metodo}/${cosas}`);
// });

let port = 3000;

app.listen(port, function(req, res) {
  console.log(`Estas en el servidor ${port}`);
});
