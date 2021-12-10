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
    { fullName: { [Op.like]: `%${likeaname}%` } },
  });
  if (search) return search;
  return ({
    error: { code: 'invalidId' },
  });
};

const cashDeposit = async (originCpf, destinyCpf, quantity) => {
  const originAccount = await searchAccountByCpf(originCpf);
  const destinyAccount = await searchAccountByCpf(destinyCpf);
  if (originAccount.balance - quantity >= 0) {
    await Account.update({
      fullName: originAccount.fullName,
      cpf: originCpf,
      balance: originAccount.balance - quantity,
     }, { where: { cpf: originCpf } });
    await Account.update({
      fullName: destinyAccount.fullName,
      cpf: destinyCpf,
      balance: destinyAccount.balance + quantity,
    }, { where: { cpf: destinyCpf } });
  } return ({
      error: { code: 'insuficientCash' },
  });
};

module.exports = {
  searchAccountById,
  searchAccountByCpf,
  accountRegister,
  searchAccountByFullName,
  cashDeposit,
};
