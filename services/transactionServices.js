const { Transaction } = require('../models');
const servicesAccount = require('./accountServices');
const { dateGenerator } = require('../utils/validators');

const cashTransference = async (originCpf, destinyCpf, quantity) => {
  const originAccount = await servicesAccount.searchAccountByCpf(originCpf);
  const destinyAccount = await servicesAccount.searchAccountByCpf(destinyCpf);
  if (originAccount && destinyAccount) {
    await servicesAccount.cashTransference(originCpf, destinyCpf, quantity);
    return Transaction.create({
      date: dateGenerator(),
      originAccountId: originAccount.id,
      destinyAccountId: destinyAccount.id,
      originCpf: originAccount.cpf,
      destinyCpf: destinyAccount.cpf,
      quantity,
    });
  } return ({
      error: { code: 'invalidCpf' },
  });
};

module.exports = {
  cashTransference,
};
