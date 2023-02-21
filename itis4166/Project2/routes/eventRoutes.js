const express = require('express');
const controller = require('../controllers/eventController');

const router = express.Router();

router.get('/', controller.index);

router.get('/new', controller.new);

router.get('/:id', controller.show);

module.exports = router;