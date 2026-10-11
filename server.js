const express = require("express");
const connectDB = require("./config/connectdb");
const contactUserRouter = require("./routes/contactUser");
const app = express();
const port = 5000;

connectDB();

app.use(express.json());

app.use("/api/contactuser", contactUserRouter);

app.listen(port, console.log(`server is running on http://localhost:${port}`));
