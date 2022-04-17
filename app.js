const express = require("express");
const app = express();
app.get("", (request, response, next) => {
  response.send("Hello");
  next();
});
app.get("/books", (request, response, next) => {
  let books = {
    book1: "2 states",
    book2: "How to become a millionare at 20",
    book3: "The subtle art of not giving a fuck",
    book4: "Hello to programming",
  };
  response.send(JSON.stringify(books));
});
module.exports = app;
