const User = require('../models/user');

function sessionsNew(req, res) {
  res.render('sessions/new');
}

function sessionsCreate(req, res, next) {
  User
  .findOne({ email: req.body.email })
  .then((user) => {})
}
