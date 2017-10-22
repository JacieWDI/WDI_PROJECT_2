const express = require('express');
const router  = express.Router();
const trailshoesController =  require('../controllers/trailshoes');

router.get('/', (req, res) =>
  res.render('statics/homepage'));

router.route('/trailshoes')
  .get(trailshoesController.index);


//const registrationsController = require('../controllers/registrations');

// A home route
// router.get('/', (req, res) => res.render('homepage'));

// RESTful routes
// All URLS should contain the PLURAL... don't chose octopus or people or something silly.

// INDEX
// router.route('/')
//   .get(trailshoesController.index);

// NEW

// SHOW

// CREATE

// EDIT

// UPDATE

// DELETE


module.exports = router;
