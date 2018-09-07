import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import expressValidator from "express-validator";

const sqlite3 = require("sqlite3").verbose();

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env" });

// Controllers (route handlers)
import * as userController from "./controllers/user";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});
/**
 * Primary app routes.
 */
app.get("/apphealth", userController.apiHealthCheck);
app.get("/users", userController.users);

export default app;