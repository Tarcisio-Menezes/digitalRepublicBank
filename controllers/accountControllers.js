// const joi = require('joi');
const rescue = require('express-rescue');
const service = require('../services/accountServices');

const searchAccountById = rescue(async (req, res, next) => {
  const { id } = req.params;
  const account = await service.searchAccountById(id);
  if (account.error) return next(account.error);
  return res.status(200).json(account);
});

module.exports = {
  searchAccountById,
};
