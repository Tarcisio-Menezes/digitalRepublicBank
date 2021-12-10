module.exports = (err, _req, res, _next) => {
  console.log(err);
  if (err.isJoi) return res.status(400).json({ message: err.details[0].message });

  if (err.code === 'insuficientCash') {
    return res.status(401).json({ message: 'Cash not suficient' });
  }

  if (err.code === 'invalidCpf') {
    return res.status(401).json({ message: 'This CPF is invalid' });
  }

  return res.status(500).json({ message: 'Critical Error :(' });
};
