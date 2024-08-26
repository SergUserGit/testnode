import express from "express";

const app = express();

app.get("/", routOne);
app.get("/astrology", routTwo);

app.listen(3000, () => console.log("Server is runningn"));

function routOne(request, response) {
  response.send("<h2>My page</h2>");
}

function routTwo(request, response) {
  console.log(request.url);
  console.log(request.method);
  response.send("<h2>Astrology page</h2>");
}
