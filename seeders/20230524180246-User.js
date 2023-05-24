'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "John Doe",
          email: "johndoe@example.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jane Smith",
          email: "janesmith@example.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mark Johnson",
          email: "markjohnson@example.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
