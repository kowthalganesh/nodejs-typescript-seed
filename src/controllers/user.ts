import { Request, Response } from "express";
import * as userService from "../models/userService";

const request = require("express-validator");

/**
 * GET /apphealth
 * API health checks
 */
export let apiHealthCheck = (req: Request, res: Response) => {
  res.json({"status": "ok"});
};


/**
 * GET /users
 * List of users from sqlite
 */
export let users = (req: Request, res: Response) => {
  userService.getUsers().then(function(response) {
    res.json(response);
  }).catch(function(error) {
    console.log(error);
  });
};
