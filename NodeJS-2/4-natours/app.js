const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV !== 'development') app.use(morgan('dev'));

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;

// Flow:receiving the request in app.js
// -> depending on the route to enter one of the Router
// -> depending on the route (/ or :id) or request then execute one of the controller
// -> then the res get send and, finishing the request-response cycle
// server.js to have everything related to express in one file and others related to the server
// in another main file

//MVC Architecture
// model: is concerned with everything about application data and business logic
// controller: handle application request interact with model and send back response to the client
// view: consist of templates to generate the view
