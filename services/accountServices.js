const { Op } = require('sequelize');
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
  const accountExist = await searchAccountByCpf(cpf);
  if (accountExist) {
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

const searchAccountByFullName = async (likeaname) => {
  const search = await Account.findAll({ where: 
    { fullName: { [Op.like]: likeaname } },
  });
  if (search) return search;
  return ({
    error: { code: 'invalidId' },
  });
};

module.exports = {
  searchAccountById,
  accountRegister,
  searchAccountByFullName,
};
