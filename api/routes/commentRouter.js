const express = require('express');
const { ObjectId } = require('mongoose').Types;
const Post = require('../models/Post');
const { checkAuthenticated } = require('../app');

const router = express.Router();

router.post('/addComment', checkAuthenticated, (req, res) => {
  const { username } = req.user;
  const { postId } = req.body;
  const { text } = req.body;

  const comment = {
    username,
    datetime: Date.now(),
    text,
    mentions: [],
  };

  Post.findOneAndUpdate(
    { _id: ObjectId(postId) },
    { $push: { comments: comment } },
  )
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.status(500);
      res.send(`[!] Could not add comment: ${err}`);
    });
});

router.post('/editComment', checkAuthenticated, (req, res) => {
  const { username } = req.user;
  const { postId } = req.body;
  const { commentId } = req.body;
  const { text } = req.body;

  Post.findOneAndUpdate(
    { _id: ObjectId(postId), comments: { $elemMatch: { _id: ObjectId(commentId), username } } },
    { $set: { 'comments.$.text': text } },
  )
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.status(500);
      res.send(`[!] Could not edit comment: ${err}`);
    });
});

router.delete('/deleteComment', checkAuthenticated, (req, res) => {
  const { username } = req.user;
  const { postId } = req.body;
  const { commentId } = req.body;

  Post.findOneAndUpdate(
    { _id: ObjectId(postId) },
    { $pull: { comments: { username, _id: ObjectId(commentId) } } },
  )
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.status(500);
      res.send(`[!] Could not delete comment: ${err}`);
    });
});

module.exports = router;
