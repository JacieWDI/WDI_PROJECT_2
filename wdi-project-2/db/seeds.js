const mongoose = require('mongoose');
const { dbUri } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(dbUri, { useMongoClient: true });

// Require the model

const Trailshoe = require('../models/trailshoe');

// Drop the model

Trailshoe.collection.drop();

// Create the models

Trailshoe
  .create([{
    brand: 'Inov8',
    name: 'Mudclaw 300',
    image: 'https://www.startfitness.co.uk/media/catalog/product/cache/6/image/800x/9df78eab33525d08d6e5fb8d27136e95/i/n/inov8-mudclaw-300-167424.jpg',
    description: 'Legendary all terrain animal with unique sole will claw through any mud, drenched terrain. Great for adventure racing and toughest off trail events.'
  },{
    brand: 'Salomon',
    name: 'Speedcross 4',
    image: 'https://e-megasport.de/eng_pl_Salomon-Speedcross-4-383130-5263_6.jpg',
    description: 'Conquer every trail in the Salamon Speedcross 4. Become a blur as you power through the wilderness!'
  },{
    brand: 'Merrell',
    name: 'All Out Crush Tough Mudder',
    image: 'https://www.zappos.com/images/z/3/7/9/8/6/4/3798648-p-4x.jpg',
    description: 'Versatile trail running shoe built to take a beating and get you across the finish line, and clean up for your next adventure.'
  },{
    brand: 'Adidas',
    name: 'Kanadia 7 Gore-tex',
    image: 'https://cdn.sportsshoes.com/product/A/ADI8367/ADI8367_1000_5.jpg',
    description: 'Rugged and lightweight, these were made for running fast. Waterproof, breathable Gore-tex and Traxion grips for unpredictable terrain, these will keep your feet protected.'
  }])
  .then((trailshoe) => {
    console.log(`${trailshoe.length}trail shoes created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
