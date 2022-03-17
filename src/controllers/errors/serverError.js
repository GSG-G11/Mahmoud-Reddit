const { join } = require('path');

const serverError = (err, req, res, next) => {
  if (err.status) {
    res.json({ message: err.message, status: err.status });
    next();
  } else {
    res.status(500).sendFile(join(__dirname, '..', '..', '..', 'public', 'html', '500.html'));
  }
};

module.exports = serverError;
