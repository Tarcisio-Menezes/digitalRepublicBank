const joi = require('joi');
const rescue = require('express-rescue');
const service = require('../services/transactionServices');

const cashTranference = rescue(async (req, res, next) => {
  const { error } = joi.object({
    originCpf: joi.string().required(),
    destinyCpf: joi.string().required(),
    quantity: joi.number(),
  }).validate(req.body);

  if (error) return next(error);
  const { originCpf, destinyCpf, quantity } = req.body;

  const transference = await service.cashTransference(originCpf, destinyCpf, quantity);
  if (transference.error) return next(transference.error);
  return res.status(200).json(transference);
});

module.exports = {
  cashTranference,
};
