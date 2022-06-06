// const faker = require('faker');
const userSeeds = require('./userSeed.json');
const thoughtSeeds = require('./thoughtSeed.json');
const db = require('../config/connection');
const { Thought, User } = require('../models');

db.once('open', async () => {
  try {
    await Thought.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let thoughtSeed of thoughtSeeds) {
      const { _id, thoughtAuthor } = await Thought.create(thoughtSeed);
      const user = await User.findOneAndUpdate(
        { username: thoughtAuthor },
        {
          $addToSet: {
            thoughts: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});