'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contents', [
      {
      title: 'First Page',
      description: 'belajar bang 1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Second Page',
      description: 'belajar bang 2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Third Page',
      description: 'belajar bang 3',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Fourth Page',
      description: 'belajar bang 4',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contents', null, {});
  }
};