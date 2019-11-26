const bcrypt = require('bcryptjs');
const express = require('express');
const fs = require('fs');
const User = require('../models/User');
const { passport } = require('../app');
const { parser } = require('../app');
const { checkAuthenticated } = require('../app');
const { checkNotAuthenticated } = require('../app');

const router = express.Router();

router.post('/register', checkNotAuthenticated, parser.single('image'), async (req, res) => {
  const { firstName } = req.body;
  const { lastName } = req.body;
  const { email } = req.body;
  const { password } = req.body;
  const { username } = req.body;
  const { file } = req;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    // Leave image undefined if the user does not upload a profile picture.
    // Handle undefined case on the client side.
    let image;

    User.findOne({ email })
      .then((userFoundByEmail) => {
        if (userFoundByEmail) {
          res.status(400);
          res.send(`[!] Email address is already in use: ${email}`);
        } else {
          User.findOne({ username })
            .then((userFoundByUsername) => {
              if (userFoundByUsername) {
                res.status(400);
                res.send(`[!] Username is already in use: ${username}`);
              } else {
                if (file) {
                  let bytes;

                  try {
                    const img = fs.readFileSync(file.path);
                    bytes = img.toString('base64');
                    fs.unlinkSync(file.path);
                  } catch (err) {
                    res.status(400);
                    res.send(`[!] Could not read profile picture: ${err}`);
                  }

                  if (bytes !== '') {
                    image = Buffer.from(bytes, 'base64');
                  }
                }

                const newUser = new User({
                  email,
                  username,
                  firstName,
                  lastName,
                  password: hashedPassword,
                  image,
                  posts: [],
                  likes: [],
                  followers: [],
                  followees: [],
                });

                newUser.save()
                  .then(() => res.sendStatus(200))
                  .catch((err) => {
                    res.status(500);
                    res.send(`[!] Could not register user: ${err}`);
                  });
              }
            });
        }
      });
  } catch (err) {
    res.status(500);
    res.send(`[!] Could not register user: ${err}`);
  }
});

router.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/succeed',
  failureRedirect: '/fail',
  failureFlash: true,
}));

router.get('/succeed', (req, res) => {
  res.status(200);
});

router.get('/fail', (req, res) => {
  res.status(401);
});

router.delete('/logout', checkAuthenticated, (req, res) => {
  req.logOut();
  res.sendStatus(200);
});

router.get('/isLoggedIn', (req, res) => {
  if (req.isAuthenticated()) {
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;
