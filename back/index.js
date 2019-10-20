var express = require("express"),
  app = express(),
  port = process.env.PORT || 8000,
  cors = require("cors");

app.use(cors());

var routes = require("./api/routes/textRoutes");
routes(app);

app.listen(port, () => {
  console.log(`Server started on: ${port}`);
});

module.exports = app;
