// const { Account, Transaction } = require('../models');
const servicesAccount = require('./accountServices');

const cashTransference = async (originCpf, destinyCpf, quantity) => {
  const originAccount = await servicesAccount.searchAccountByCpf(originCpf);
  const destinyAccount = await servicesAccount.searchAccountByCpf(destinyCpf);
  if (originAccount && destinyAccount) {
    return servicesAccount.cashTransference(originCpf, destinyCpf, quantity);
  } return ({
      error: { code: 'invalidCpf' },
  });
};

module.exports = {
  cashTransference,
};
