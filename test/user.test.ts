import request from "supertest";
import app from "../src/app";

const chai = require("chai");
const expect = chai.expect;

describe("GET /apphealthcheck", () => {
  it("should return 200 OK", () => {
    return request(app).get("/apihealths")
      .expect(200);
  });
});
