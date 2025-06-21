"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // Assuming admin role has ID 1 and admin user has ID 1
    await queryInterface.bulkInsert("UserRoles", [
      {
        userId: 1,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UserRoles", {
      userId: 1,
      roleId: 1,
    });
  },
};
