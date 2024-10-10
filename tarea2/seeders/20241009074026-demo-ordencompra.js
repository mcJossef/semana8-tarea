'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('OrdenCompras', [
      {
        NroOrdenC: 1,
        fechaEmision: '2024-10-10',
        Situacion: 'Pendiente',
        Total: 500.00,
        CodLab: 1,
        NrofacturaProv: 'FAC12345'
      },
      {
        NroOrdenC: 2,
        fechaEmision: '2024-10-11',
        Situacion: 'Completa',
        Total: 1000.00,
        CodLab: 2,
        NrofacturaProv: 'FAC12346'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('OrdenCompras', null, {});
  }
};
