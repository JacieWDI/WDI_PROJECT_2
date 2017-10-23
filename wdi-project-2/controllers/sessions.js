const User = require('../models/user');

function sessionsNew(req, res) {
  res.render('sessions/new');
}

// take the email that the user inputted in the form and find that the user in the database, check if user exists or is password matches with the one in the database and if either do not match, display error message.

function sessionsCreate(req, res) {
  User
    .create({ email: req.body.email })
    .then((user) => {
      if(!user || !user.validatePassword(req.body.password)) {
        res.status(401).render('sessions/new'), { message: 'Unrecognised credentials' });
      }
      res.redirect
    });
}

module.exports = {
  new: sessionsNew,
  create: sessionsCreate
}
