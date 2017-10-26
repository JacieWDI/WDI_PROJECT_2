const User = require('../models/user');

function sessionsNew(req, res) {
  res.render('sessions/new');
}

//CHECK USER DOES NOT ALREADY EXIST & DETAILS MATCH - IF NOT, THROW ERROR
function sessionsCreate(req, res) {
  User
    .findOne({ email: req.body.email })
    .then((user) => {
      if(!user || !user.validatePassword(req.body.password)) {
        res.status(401).render('sessions/new', { message: 'Unrecognised credentials' });
      }

      req.session.userId = user.id;

      req.flash('info', `Welcome back, ${user.username}!`);
      return res.redirect('/trailshoes');
    });
}

function sessionsDelete(req, res) {
  return req.session.regenerate(() => res.redirect('/'));
}

module.exports = {
  new: sessionsNew,
  create: sessionsCreate,
  delete: sessionsDelete
};
