const express = require('express');
const app = express();

app.listen(3000);

var animals = [];

animals.push({
    name: "Bob",
    type: "Canine",
    description: "5 month old german sheperd",
    image: "http://www.google.com"
});

animals.push({
    name: "Bob",
    type: "Rabbit",
    description: "5 month old german rabbit",
    image: "http://www.google.com"
});

var count = 0;

app.get('/test', function (req, res) {
  res.json(animals[count]);
  count += 1;
})

module.exports = app;