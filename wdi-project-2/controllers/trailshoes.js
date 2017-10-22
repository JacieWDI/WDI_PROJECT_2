const Trailshoe = require('../models/trailshoe');

function indexRoute(req, res, next) {
  Trailshoe
    .find()
    .exec()
    .then((trailshoes) => res.render('trailshoes/index', { trailshoes }))
    .catch(next);
}

module.exports = {
  index: indexRoute
};
