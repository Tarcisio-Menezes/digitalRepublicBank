'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Transactions',
      [
        {
          date: '10/12/21',
          originAccountId: '2',
          destinyAccountId: '4',
          originCpf: '31882558724',
          destinyCpf: '45913389230',
          quantity: 100,
        },
        {
          date: '11/12/21',
          originAccountId: '4',
          destinyAccountId: '2',
          originCpf: '45913389230',
          destinyCpf: '31882558724',
          quantity: 150,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Transactions', null, {});
  },
};
