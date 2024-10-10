'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('OrdenCompra', [
      {
        NroOrdenC: 2,
        fechaEmision: '2024-10-09',
        Situacion: 'Pendiente',
        Total: 1000.50,
        CodLab: 1,
        NrofacturaProv: 'FAC12345'
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('OrdenCompra', { NroOrdenC: 2 }, {});
  }
};
