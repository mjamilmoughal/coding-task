import express from "express";
import database from "mongoose";
import { json, urlencoded } from "body-parser";

//routes
import productRoute from "./routes/product";
import cartRoute from "./routes/cart";

//configuration
const SERVER_AND_DATABASE_NAME = "mongodb://localhost:27017/taskDB";
const PORT = 3100;

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

//defining appropriate routes
app.use("/product", productRoute);
app.use("/cart", cartRoute);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

database.connect(SERVER_AND_DATABASE_NAME, () => {
  console.log("Successfully connected to database!");
});

app.listen(PORT, () => {
  console.log(`Server is listening at Port ${PORT}`);
});

//handling unhandled exceptions
process.on("uncaughtException", function (err) {
  console.error(err);
  console.log("Error Occured!");
});
