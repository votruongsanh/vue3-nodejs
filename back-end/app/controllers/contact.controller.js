const db = require("../models");
const Contact = db.contacts;

// Create and Save a new Contact
exports.create = (req, res) => {
  const { name, email, address, phoneNumber, website, note } = req.body;
  // Validate request
  if (!name || !email || !address || !phoneNumber) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Contact
  const contact = {
    name,
    email,
    address,
    phoneNumber,
    website,
    note,
  };
  // Save Contact in the database
  Contact.create(contact)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Contact.",
      });
    });
};
