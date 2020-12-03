var express = require('express');
const { route } = require('.');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')

router.get('/new', flightsCtrl.new)
router.post('/', flightsCtrl.create)
router.get('/', flightsCtrl.index)
router.get('/:id', flightsCtrl.show)

module.exports = router;
