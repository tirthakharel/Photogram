/* eslint-disable prefer-destructuring */
const bcrypt = require('bcryptjs');
const express = require('express');
const fs = require('fs');
const path = require('path');
const User = require('../models/User');
const { passport } = require('../app');
const { parser } = require('../app');
const { checkAuthenticated } = require('../app');
const { checkNotAuthenticated } = require('../app');
const {
  checkInput,
  handleInputCheck,
  checkFileSize,
  maxFileMb,
} = require('../app');

const router = express.Router();

router.post('/register', checkNotAuthenticated,
  parser.single('image'),
  checkInput(),
  handleInputCheck,
  async (req, res) => {
    const { firstName } = req.body;
    const { lastName } = req.body;
    const { email } = req.body;
    const { password } = req.body;
    const { username } = req.body;
    const { file } = req;

    if (file && !checkFileSize(file)) {
      res.status(422).send(`[!] Profile picture is too large (max = ${maxFileMb}MB)`);
    } else {
      try {
        const hashedPassword = await bcrypt.hash(password, 10);
        let image = fs.readFileSync(path.join(__dirname, '../public/images/default-profile.png'));

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

                      if (bytes) {
                        image = Buffer.from(bytes, 'base64');
                      }
                    }

                    const newUser = new User({
                      email,
                      username,
                      firstName,
                      lastName,
                      password: hashedPassword,
                      lockout: { attempts: 0, lastFailedDatetime: -1 },
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
    }
  });

router.post('/login',
  checkNotAuthenticated,
  passport.authenticate('local'),
  (req, res) => {
    res.sendStatus(200);
  },
  (req, res) => {
    res.sendStatus(401);
  });

router.delete('/logout', checkAuthenticated, (req, res) => {
  req.logOut();
  res.sendStatus(200);
});

router.get('/checkAuth', (req, res) => {
  if (req.isAuthenticated()) {
    res.sendStatus(200);
  } else {
    res.sendStatus(204);
  }
});

module.exports = router;
