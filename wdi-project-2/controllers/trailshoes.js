const Trailshoe = require('../models/trailshoe');

function indexRoute(req, res, next) {
  Trailshoe
    .find()
    .exec()
    .then((trailshoes) => res.render('trailshoes/index', { trailshoes }))
    .catch(next);
}

function newRoute(req, res) {
  return res.render('trailshoes/new');
}

function createRoute(req, res, next) {
  Trailshoe
    .create(req.body)
    .then(() => res.redirect('/trailshoes'))
    .catch((err)=> {
      if(err.name === 'ValidationError') return res.badRequest(`/trailshoes/${req.params.id}/edit`, err.toString());
      next(err);
    });
}

function showRoute(req, res, next) {
  Trailshoe
    .findById(req.params.id)
    .exec()
    .then(trailshoe => {
      if(!trailshoe) return res.notFound();
      return res.render('trailshoes/show', { trailshoe });
    })
    .catch(next);
}


module.exports = {
  index: indexRoute,
  new: newRoute,
  create: createRoute,
  show: showRoute
};
