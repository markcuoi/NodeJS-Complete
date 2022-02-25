const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const planetsRouter = require("./routes/planets/planets.router");
const { launchesRouter } = require("./routes/launches/launches.router");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(morgan("combined"));

// app.use() loads a function to be used as middleware.
app.use(express.json());

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, "..", "public")));
app.use("/planets", planetsRouter);
app.use("/launches", launchesRouter);

// app.use(path, callback) will respond to any HTTP request.
// app.get(path, callback) will only respond to GET HTTP request.

// using a star * to catch all files that weren't found in your static (public) directory
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
