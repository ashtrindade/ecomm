'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Payments', [
      {
        amount: 100,
        cardHolder: 'Jane Doe',
        cardNumber: '123456789000',
        cardExp: '2030-01',
        cardCvv: '232',
        status: 'Created',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 3000,
        cardHolder: 'Jhon Doe',
        cardNumber: '012345678900',
        cardExp: '2023-10',
        cardCvv: '563',
        status: 'Created',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Payments', null, {})
  }
}