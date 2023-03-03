const express = require("express");
const apicache = require("apicache");
const bodyParser = require("body-parser");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");
require('dotenv').config()

const v1ProductsRouter = require("./v1/routes/productsRoutes");

const app = express();
const PORT = process.env.PORT ||  3000;

app.use("/api/v1/products", v1ProductsRouter)

app.get('/', (req, res) => {
  res.send(`<h1>API Works !!!</h1>`)
});

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`)
});
