'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Laboratorio', [
      {
        CodLab: 2,
        razonSocial: 'Laboratorio C',
        direccion: 'Calle Real 789',
        telefono: '999888777',
        email: 'ventas@labc.com',
        contacto: 'Miguel Rivera'
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Laboratorio', { CodLab: 2 }, {});
  }
};
