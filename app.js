const express = require("express");
const app = express();
const chalk = require("chalk");
const nunjucks = require("nunjucks");

const routes = require("./routes");

app.set("view engine", "html"); // hace que res.render funcione con archivos html
app.engine("html", nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure("views"); // apunta a nunjucks al directorio correcto para los templates

//Use para cualquier tipo de request ----> esto es un middleware

app.use(express.static("public"));

app.use("/", routes);

let port = 3000;

app.listen(port, function(req, res) {});

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
// var locals = {
//   title: "An Example",
//   people: [{ name: "Gandalf" }, { name: "Frodo" }, { name: "Hermione" }]
// };
// nunjucks.configure("views", { noCache: true });
// nunjucks.render("index.html", locals, function(err, output) {
//   console.log(output);
// });

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

// const people = [{ name: "Gandalf" }, { name: "Frodo" }, { name: "Hermione" }];
// app.get("/", function(req, res) {
//   res.render("index", { title: "hola", people });
// });

// app.get("/tweets/:tweetID", function(req, res) {
//   res.status(200).send("<html>…un archivo html mostrando el tweet #5…</html>");
// });
// app.get("/tweets/", function(req, res) {
//   res.status(200).send("<html>…un archivo html mostrando TWEETS…</html>");
// });
// app.get("/", function(req, res) {
//   res.status(200).send("<html>…un sitio en construcion");
// });
