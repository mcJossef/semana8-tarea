'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('DetalleOrdenCompras', [
      {
        NroOrdenC: 1,
        descripcion: 'Paracetamol',
        cantidad: 10,
        precio: 5.00,
        montouni: 50.00
      },
      {
        NroOrdenC: 2,
        descripcion: 'Ibuprofeno',
        cantidad: 5,
        precio: 8.00,
        montouni: 40.00
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('DetalleOrdenCompras', null, {});
  }
};
