const express = require("express");
const blogRoutes = require("./routes/blogs-routes.js");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const port = 3001;
const atlasUri =
  "mongodb+srv://yanaysella:Yanay1234@keepycluster.7yjnjyf.mongodb.net/?retryWrites=true&w=majority";

const app = express();
mongoose.set("strictQuery", false);

app.use("/api/blog", blogRoutes);

mongoose.connect(atlasUri).then(() => {
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
});
