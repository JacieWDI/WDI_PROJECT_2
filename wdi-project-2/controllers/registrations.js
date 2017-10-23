const User = require('../models/user');

function newRoute(req, res) {
  return res.render('registrations/new');
}

function createRoute(req, res, next) {
  User
    .create(req.body)
    .then(()=> {
      res.redirect('/login');
    })
    .catch((err)=> {
      if(err.name === 'ValidationError') {
        return res.status(400).render('registrations/new', { message: 'Passwords do not match'});
      }
      next(err);
    });
}

function showRoute(req, res) {
  return res.render('registrations/show');
}

module.exports = {
  new: newRoute,
  create: createRoute,
  show: showRoute
};
