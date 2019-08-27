exports.clientError = (req, res) => {
  res.status(404).render('clientError');
};

exports.serverError = (err, req, res, next) => {
  res.status(500).render('serverError');
};
