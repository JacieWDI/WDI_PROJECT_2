const express = require('express');
const router  = express.Router();
const trailshoesController =  require('../controllers/trailshoes');
const secureRoute = require('../lib/secureRoute');

//Home route
router.get('/', (req, res) =>
  res.render('statics/homepage'));

//const registrationsController = require('../controllers/registrations');

// RESTful routes
// All URLS should contain the PLURAL

//INDEX & CREATE
router.route('/trailshoes')
  .get(trailshoesController.index)
  .post(secureRoute, trailshoesController.create);

// NEW
router.route('/trailshoes/new')
  .get(secureRoute, trailshoesController.new);

// SHOW
router.route('trailshoes/:id')
  .get(trailshoesController.show);

// CREATE
//above

// EDIT
router.route('/trailshoes/:id/edit')
  .get(secureRoute, trailshoesController.edit);

// UPDATE

// DELETE


module.exports = router;
