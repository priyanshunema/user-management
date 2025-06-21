"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashed = await bcrypt.hash("admin123", 10);

    await queryInterface.bulkInsert("Users", [
      {
        firstName: "Admin",
        lastName: "User",
        email: "admin@example.com",
        phone: "9999999999",
        password: hashed,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", { email: "admin@example.com" }, {});
  },
};
