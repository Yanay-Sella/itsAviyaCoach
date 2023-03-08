const verifyAdmin = (req, res, next) => {
  if (!req.role) return res.sendStatus(401);
  const allowed = req.role === 2018;
  if (!allowed) return res.sendStatus(401);
  next();
};

module.exports = verifyAdmin;
