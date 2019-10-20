var app = require("../index");
var chai = require("chai");
var request = require("supertest");

var expect = chai.expect;

describe("# Get text from param", function() {
  it("should get message passed from param", function(done) {
    request(app)
      .get("/text?message=HelloWorld")
      .end(function(err, res) {
        if (err) throw done(err);
        expect(res.statusCode).to.equal(200);
        expect(res.body.message).to.equal("HelloWorld");
        done();
      });
  });
});