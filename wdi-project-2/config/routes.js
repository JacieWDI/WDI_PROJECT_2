const express = require('express');
const router  = express.Router();
const sessionsController = require('../controllers/sessions');
const registrationsController = require('../controllers/registrations');
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

//REGISTRATION ROUTES

router.route('/register')
  .get(registrationsController.new)
  .post(registrationsController.create);

router.route('/login')
  .get(sessionsController.new)
  .post(sessionsController.create);

module.exports = router;
