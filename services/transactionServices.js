const { Transaction } = require('../models');
const servicesAccount = require('./accountServices');
const { dateGenerator } = require('../utils/validators');

const maxTransferQuantity = 2000;

const cashTransference = async (originCpf, destinyCpf, quantity) => {
  const originAccount = await servicesAccount.searchAccountByCpf(originCpf);
  const destinyAccount = await servicesAccount.searchAccountByCpf(destinyCpf);
  if (quantity > maxTransferQuantity) {
    return ({ error: { code: 'limitTransfer' } });
  }
  if (originAccount && destinyAccount) {
    const transference = await servicesAccount.cashTransference(originCpf, destinyCpf, quantity);
    if (!transference.error) {
      return Transaction.create({
        date: dateGenerator(),
        originAccountId: originAccount.id,
        destinyAccountId: destinyAccount.id,
        originCpf: originAccount.cpf,
        destinyCpf: destinyAccount.cpf,
        quantity,
      });
    } return ({ error: { code: 'insuficientCash' } });
  } return ({ error: { code: 'invalidCpf' } });
};

module.exports = {
  cashTransference,
};
