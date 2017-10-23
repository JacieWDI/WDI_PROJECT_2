const mongoose = require('mongoose');
const { dbUri } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(dbUri, { useMongoClient: true });

// REQUIRE THE MODEL

const Trailshoe = require('../models/trailshoe');
const User = require('../models/user');

// DROP THE MODEL

Trailshoe.collection.drop();
User.collection.drop();

// CREATE MODELS

User
  .create([{
    email: 'janis@janis.com',
    username: 'janis',
    password: 'password',
    passwordConfirmation: 'password'
  }])
  .then((users)=> {
    console.log(`${users.length} users created`);
    return Trailshoe
      .create([{
        brand: 'Inov8',
        name: 'Mudclaw 300',
        image: 'https://www.startfitness.co.uk/media/catalog/product/cache/6/image/800x/9df78eab33525d08d6e5fb8d27136e95/i/n/inov8-mudclaw-300-167424.jpg',
        description: 'Legendary all terrain animal with unique sole will claw through any mud, drenched terrain. Great for adventure racing and toughest off trail events.',
        stars: 5,
        createdBy: users[0],
        comments: {
          content: 'My favourite shoe!',
          createdBy: users[0]
        }
      },{
        brand: 'Salomon',
        name: 'Speedcross 4',
        image: 'https://e-megasport.de/eng_pl_Salomon-Speedcross-4-383130-5263_6.jpg',
        description: 'Conquer every trail in the Salamon Speedcross 4. Become a blur as you power through the wilderness!',
        stars: 3,
        createdBy: users[0],
        comments: {
          content: 'My favourite shoe!',
          createdBy: users[0]

        }
      },{
        brand: 'Merrell',
        name: 'All Out Crush Tough Mudder',
        image: 'https://www.zappos.com/images/z/3/7/9/8/6/4/3798648-p-4x.jpg',
        description: 'Versatile trail running shoe built to take a beating and get you across the finish line, and clean up for your next adventure.',
        stars: 4,
        createdBy: users[0],
        comments: {
          content: 'My favourite shoe!',
          createdBy: users[0]
        }
      },{
        brand: 'Adidas',
        name: 'Kanadia 7 Gore-tex',
        image: 'https://cdn.sportsshoes.com/product/A/ADI8367/ADI8367_1000_5.jpg',
        description: 'Rugged and lightweight, these were made for running fast. Waterproof, breathable Gore-tex and Traxion grips for unpredictable terrain, these will keep your feet protected.',
        stars: 4,
        createdBy: users[0],
        comments: {
          content: 'My favourite shoe!',
          createdBy: users[0]
        }
      },{
        brand: 'Saucony',
        name: 'Peregrine 7',
        image: 'https://cdn.fortsu.co.uk/images/products/saucony-peregrine-7_men.jpg',
        description: 'The Peregrine line has been a staple of the trail running market through the generations, excelling in comfort, traction, protection and weight. The latest version has an added full-length layer of cushioning.',
        stars: 4,
        createdBy: users[0],
        comments: {
          content: 'My favourite shoe!',
          createdBy: users[0]
        }
      }, {
        brand: 'La Sportiva',
        name: 'Bushido',
        image: 'http://mycorezone.com/wp/wp-content/uploads/2016/04/La-Sportiva-Bushido1.jpg',
        description: 'La Sportiva is a climbing company, so it should not be a surprise that the Bushido trail runner is most suited in the mountains. A favourite for technical trails, unlike heavily cushioned models, you retain a trail feel. Although, this can also be viewed as a downside if you prefer to avoid harsh impacts.',
        stars: 4,
        createdBy: users[0],
        comments: {
          content: 'My favourite shoe!',
          createdBy: users[0]
        }
      }, {
        brand: 'Arcteryx',
        name: 'Norvan VT',
        image: 'https://a2.zassets.com/images/z/3/7/6/1/0/9/3761094-p-MULTIVIEW.jpg',
        description: 'Arcteryx joined the trail-running shoe market last year with this mountain ready model, Norvan VT. Arcteryx, known for innovative, unique products has produced the same in this shoe, with lacing system extending over the toes. Sole tread are not deep, however, the aggressive design handles multi-terrains well.',
        stars: 5,
        createdBy: users[0],
        comments: {
          content: 'My favourite shoe!',
          createdBy: users[0]
        }
      }, {
        brand: 'Asics',
        name: 'Gel-FujiLyte',
        image: 'http://equipatetrailrunning.com/wp-content/uploads/Asics-Gel-Fuji-Lyte.jpg',
        description: 'For smooth trails or mix with road running, the Asics Gel-FujiLyte is for you. It offers better outer grip, lateral stability and support than a road shoe. Asics are a favourite for road runners and this will not disappoint for light trails, however, if you plan on pushing it further in trail running, an alternative maybe more suitable.',
        stars: 3,
        createdBy: users[0],
        comments: {
          content: 'My favourite shoe!',
          createdBy: users[0]
        }
      }]);
  })
  .then((trailshoe) => {
    console.log(`${trailshoe.length} trail shoes created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
