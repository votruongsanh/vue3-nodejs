module.exports = (sequelize, Sequelize) => {
  const Contact = sequelize.define("Contact", {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    phoneNumber: {
      type: Sequelize.STRING,
    },
    website: {
      type: Sequelize.STRING,
    },
    note: {
      type: Sequelize.STRING,
    },
  });

  return Contact;
};
