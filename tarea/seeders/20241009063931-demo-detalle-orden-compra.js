'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('DetalleOrdenCompra', [
      {
        NroOrdenC: 4,
        CodMedicamento: 104,
        descripcion: 'Ibuprofeno 400mg',
        cantidad: 20,
        precio: 2.75,
        montouni: 55.00
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('DetalleOrdenCompra', { NroOrdenC: 4, CodMedicamento: 104 }, {});
  }
};
