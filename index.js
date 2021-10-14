const express = require("express");
const app = express();
app.post('/bienvenido', function (req, res) {
  res.send('[POST]hola mundo');
});
app.get('/bienvenido', function (req, res) {
  res.send('[GET]hola mundo');
});
app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});