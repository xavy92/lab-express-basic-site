const express = require("express");
const app = express();

app.use(express.static(`${__dirname}/public`));
app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});
app.get("/about", (request, response) => {
  response.sendFile(`${__dirname}/views/about.html`);
});
app.get("/works", (request, response) => {
  response.sendFile(`${__dirname}/views/works.html`);
});

app.listen(3005, () => {
  console.log("running");
});