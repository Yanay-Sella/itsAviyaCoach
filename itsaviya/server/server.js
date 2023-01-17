const express = require("express");
const cors = require("cors");
const blogRoutes = require("./routes/blogs-routes.js");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//TODO: make an .env file
const port = 3001;
const atlasUri =
  "mongodb+srv://yanaysella:Yanay1234@keepycluster.7yjnjyf.mongodb.net/?retryWrites=true&w=majority";
const clientUri = "http://localhost:3000";

const app = express();

mongoose.set("strictQuery", false);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: clientUri }));

//routes
app.use("/api/blog", blogRoutes);

mongoose.connect(atlasUri).then(() => {
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
});
