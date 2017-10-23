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

function editRoute(req, res, next) {
  Trailshoe
    .findById(req.params.id)
    .exec()
    .then((trailshoe)=> {
      return res.render('trailshoes/edit', { trailshoe });
    })
    .catch(next);
}

function updateRoute(req, res, next) {
  Trailshoe
    .findById(req.params.id)
    .exec()
    .then(trailshoe => {
      if(!trailshoe) return res.notFound();
      if(!trailshoe.belongsTo(req.user)) return res.unauthorized('You do not have permission to edit that resoource');

      for (const field in req.body) {
        trailshoe[field] = req.body[field];
      }

      return trailshoe.save();
    })
    .then(() =>
      res.redirect(`/trailshoes/${req.params.id}`))
    .catch((err) => {
      if(err.name === 'ValidationError') return res.badRequest(`/trailshoes/${req.params.id}/edit`, err.toString());
      next(err);
    });
}

function deleteRoute(req, res, next) {
  Trailshoe
    .findById(req.params.id)
    .exec()
    .then(trailshoe => {
      if(!trailshoe) return res.notFound();
      if(!trailshoe.belongsTo(req.user)) return res.unauthorized('You do not have permission to delete that resource');
      return trailshoe.remove();
    })
    .then(() => res.redirect('/trailshoes'))
    .catch(next);
}


module.exports = {
  index: indexRoute,
  new: newRoute,
  create: createRoute,
  show: showRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute
};
