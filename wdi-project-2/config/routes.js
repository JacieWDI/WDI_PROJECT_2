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

// SHOW & UPDATE & DELETE
router.route('/trailshoes/:id')
  .get(trailshoesController.show)
  .put(secureRoute, trailshoesController.update)
  .delete(secureRoute, trailshoesController.delete);

// CREATE
//above

// EDIT
router.route('/trailshoes/:id/edit')
  .get(secureRoute, trailshoesController.edit);

// UPDATE
//above

// DELETE
//above

//REGISTRATION ROUTES

router.route('/register')
  .get(registrationsController.new)
  .post(registrationsController.create);

router.route('/login')
  .get(sessionsController.new)
  .post(sessionsController.create);

router.route('/logout')
  .get(sessionsController.delete);

//SECURE ROUTES
router.route('/profile')
  .get(secureRoute, registrationsController.show)
  .put(secureRoute, registrationsController.update)
  .delete(secureRoute, registrationsController.delete);

router.route('/profile/edit')
  .get(secureRoute, registrationsController.edit);

router.all('*', (req, res) => res.notFound());

module.exports = router;
