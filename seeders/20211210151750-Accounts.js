'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Accounts',
      [
        {
          full_name: 'Tarcísio Digital Republic Lover',
          cpf: '42993689835',
          ballance: 15.65,
        },
        {
          full_name: 'Ramón Valdez',
          cpf: '31882558724',
          ballance: 50000000,
        },
        {
          full_name: 'Roberto Bolanhõs',
          cpf: '98657441323',
          ballance: 49000000,
        },
        {
          full_name: 'Maria Antonieta de las Nieves',
          cpf: '42993689835',
          ballance: 60000000,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Employees', null, {});
  },
};
