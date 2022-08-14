module.exports = (app) => {
  const contact = require("../controllers/contact.controller.js");

  var router = require("express").Router();

  // Create a new Contact
  router.post("/", contact.create);

  app.use("/api/contact", router);
};
