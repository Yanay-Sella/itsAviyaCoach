require("dotenv").config();
const express = require("express");
const cors = require("cors");
const blogRoutes = require("./routes/blogs-routes.js");
const userRoutes = require("./routes/user-routes.js");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//TODO: change mongo password
const port = 3001;
const atlasUri = process.env.ATLAS_URI;
const clientURL = process.env.CLIENT_URL;

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: clientURL }));
mongoose.set("strictQuery", false);

//routes
app.use("/api/blog", blogRoutes);
app.use("/api/user", userRoutes);

mongoose.connect(atlasUri).then(() => {
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
});
