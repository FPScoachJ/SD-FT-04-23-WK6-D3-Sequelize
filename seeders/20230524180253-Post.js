'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Posts",
      [
        {
          title: "First Post",
          content: "This is the first post",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Second Post",
          content: "This is the second post",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Third Post",
          content: "This is the third post",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Fourth Post",
          content: "This is the fourth post",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Fifth Post",
          content: "This is the fifth post",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
