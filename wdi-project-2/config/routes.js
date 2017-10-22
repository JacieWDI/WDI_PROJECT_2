const express = require('express');
const router  = express.Router();
const trailshoesController =  require('../controllers/trailshoes');

//Home route
router.get('/', (req, res) =>
  res.render('statics/homepage'));

//const registrationsController = require('../controllers/registrations');


// RESTful routes
// All URLS should contain the PLURAL... don't chose octopus or people or something silly.

//INDEX
router.route('/trailshoes')
  .get(trailshoesController.index);

//ALT CHECK FOR INDEX
// const Trailshoe = require('../models/trailshoe');
// router.get('/trailshoes', (req, res)=>{
//   Trailshoe
//     .find()
//     .exec()
//     .then(trailshoe => res.render('trailshoes/index, { trailshoes }'))
//     .catch(err => res.render('error', { err }));
// });



// NEW

// SHOW

// CREATE

// EDIT

// UPDATE

// DELETE


module.exports = router;
