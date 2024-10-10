'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Laboratorios', [
      {
        CodLab: 1,
        razonSocial: 'Laboratorio A',
        direccion: 'Calle Falsa 123',
        telefono: '987654321',
        email: 'contacto@laba.com',
        contacto: 'Carlos Pérez'
      },
      {
        CodLab: 2,
        razonSocial: 'Laboratorio B',
        direccion: 'Avenida Siempre Viva 456',
        telefono: '123456789',
        email: 'info@labb.com',
        contacto: 'Ana Gómez'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Laboratorios', null, {});
  }
};
