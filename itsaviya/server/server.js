require("dotenv").config();
const express = require("express");
const cors = require("cors");
const blogRoutes = require("./routes/blogs-routes.js");
const userRoutes = require("./routes/user-routes.js");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const verifyJWT = require("./middleware/verifyJWT.js");
const cookieParser = require("cookie-parser");

//TODO: change mongo password
const port = 3001;
const atlasUri = process.env.ATLAS_URI;
const clientURL = process.env.CLIENT_URL;

const app = express();

app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (origin === clientURL) {
    res.header("Access-Control-Allow-Credentials", true); // for sending the cookie from the client
  }
  next();
});

app.use(cors({ origin: clientURL }));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.set("strictQuery", false);

const awkwardRoute = express.Router();
awkwardRoute.get("/", (req, res, next) => {
  console.log("hello from client");
  res.status(200).json({
    msg: "Hello developer, please don't hack this website, but if you insist, then let me know its vulnerabilities at my email: [undefined]",
  });
});

//routes
app.use("/api/blog", blogRoutes);
app.use("/api/user", userRoutes);
app.use("/api", awkwardRoute);

mongoose.connect(atlasUri).then(() => {
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
});
