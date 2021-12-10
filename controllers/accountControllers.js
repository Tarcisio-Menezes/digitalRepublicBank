const joi = require('joi');
const rescue = require('express-rescue');
const service = require('../services/accountServices');

const searchAccountById = rescue(async (req, res, next) => {
  const { id } = req.params;
  const account = await service.searchAccountById(id);
  if (account.error) return next(account.error);
  return res.status(200).json(account);
});

const accountRegister = rescue(async (req, res, next) => {
  const { error } = joi.object({
    fullName: joi.string().required(),
    cpf: joi.string().required(),
    balance: joi.double(),
  }).validate(req.body);

  if (error) return next(error);

  const { fullName, cpf, balance } = req.body;

  const register = await service.accountRegister(fullName, cpf, balance || 0);
  if (register.error) return next(register.error);
  res.status(201).json(register);
});

module.exports = {
  searchAccountById,
  accountRegister,
};
