const validCpf = require('validar-cpf');

const isValidCpf = (cpf) => validCpf(cpf);

const isValidName = (name) => {
  const minCharacters = 8;
  if (name.length >= minCharacters) return true;
  return false;
};

module.exports = {
  isValidCpf,
  isValidName,
};
