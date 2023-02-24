'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Payments', [
      {
        amount: 100,
        cardHolder: 'Isabella Rocha',
        cardNumber: '5484558414684333',
        cardExp: '2023-07',
        cardCvv: '501',
        status: 'created',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 3000,
        cardHolder: 'Noah Ferreira',
        cardNumber: '4556487987422903',
        cardExp: '2024-08',
        cardCvv: '321',
        status: 'created',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Payments', null, {})
  }
}