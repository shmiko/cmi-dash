'use strict';

var express = require('express');
var controller = require('./yelp.controller');

var router = express.Router();

router.get('/yelp', controller.index);
router.get('/yelp/start/:location', controller.startAuth);
router.get('/yelp/:id', controller.show);
router.post('/yelp', controller.create);
router.put('/yelp/:id', controller.update);
router.patch('/yelp/:id', controller.update);
router.delete('/yelp/:id', controller.destroy);

module.exports = router;
