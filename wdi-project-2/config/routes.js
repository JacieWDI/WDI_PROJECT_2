const express = require('express');
const router  = express.Router();
const trailshoesController =  require('../controllers/trailshoes');
const secureRoute = require('../lib/secureRoute');

//Home route
router.get('/', (req, res) =>
  res.render('statics/homepage'));

//const registrationsController = require('../controllers/registrations');


// RESTful routes
// All URLS should contain the PLURAL... don't chose octopus or people or something silly.

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

// UPDATE

// DELETE


module.exports = router;
