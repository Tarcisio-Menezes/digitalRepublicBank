const { Account } = require('../models');
const utils = require('../utils/validators');

const searchAccountById = async (id) => {
  const account = await Account.findOne({ where: { id } });
  if (account) return account;
  return ({ 
    error: { code: 'invalidId' },
   });
};

const searchAccountByCpf = async (cpf) => {
  const account = await Account.findOne({ where: { cpf } });
  if (account) return account;
  return false;
};

const accountRegister = async (fullName, cpf, balance) => {
  if (searchAccountByCpf(cpf)) {
    return ({
      error: { code: 'accountAlreadyExists' },
    });
  }
  if (utils.isValidName(fullName) && utils.isValidCpf(cpf)) {
    const register = Account.create({ fullName, cpf, balance });
    return register;
  } return ({
      error: { code: 'invalidFields' },
  });
};

module.exports = {
  searchAccountById,
  accountRegister,
};
