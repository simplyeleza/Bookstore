const controller = require('./user.controller');
const express = require('express');
const router = express.Router();

// router.get('/', controller.test);

router.get('/allUsers', controller.allUsers);
router.get('/:id', controller.singleUser);

module.exports = router;