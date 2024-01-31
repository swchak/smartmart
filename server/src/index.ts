import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });
import express, { Request, Response } from "express";
const cors = require("cors");
import { routes } from "./routes";
import "reflect-metadata";

// const port = 3000;

console.log(__dirname);

console.log(process.env);
const apiUrl = process.env.API_URL;
const expressPort = process.env.WEB_PORT;

const app = express();

// use json for API routes
app.use(express.json());

const cookies = require("cookie-parser");
app.use(cookies());

//cors for API address/port
app.use(
  cors({
    credentials: true,
    origin: [apiUrl],
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("INFO:: Root route called");
});

// import routes from router
routes(app);

app.listen(expressPort, () => {
  console.log(`WebServer started on port ${expressPort}`);
});
