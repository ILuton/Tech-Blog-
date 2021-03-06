const router = require('express').Router();
const { Comment } = require('../../models');

router.post(`/:id`, async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
        comment_user: req.session.user_name,
        post_id: req.params.id
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  

  module.exports = router;
