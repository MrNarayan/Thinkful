const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

const sayHello = (req, res, next) => {
  res.send("Hello!");
};

const first = (req, res, next) => {
  res.send('First!')
};

const second = (req, res, next) => {
  res.send('Second!')
};

const first1 = (req, res, next) => {
  return next()
  res.send('First!')
}

const second1 = (req, res, next) => {
  res.send('Second!')
}


app.use((req, res, next) => {
  console.log('First!')
  next()
})
app.use((req, res, next) => {
  console.log('Second!')
  res.send('Done.')
})
app.use((req, res, next) => {
  console.log('First!')
  res.send('Done.')
})
app.use((req, res, next) => {
  console.log('Second!')
  res.send('Done.')
})
app.use(first)
app.use(second)

//app.use(sayHello);

module.exports = app;
