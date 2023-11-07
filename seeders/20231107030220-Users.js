'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username: 'azis17',
      password: 'azis23',
      email: 'azis@example.com',
      firstname: 'Azis',
      lastname: 'Maulana',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'angga2',
      password: 'angga3',
      email: 'angga@example.com',
      firstname: 'Angga',
      lastname: 'Nugroho',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};