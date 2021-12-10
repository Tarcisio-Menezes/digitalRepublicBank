const { Account } = require('../models');

const searchAccountById = async (id) => {
  const account = await Account.findOne({ where: { id } });
  if (account) return account;
  return ({ 
    error: { code: 'invalidId' },
   });
};

module.exports = {
  searchAccountById,
};
