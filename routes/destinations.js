const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations')

router.get('/destinations/new', destinationsCtrl.new);
router.post('/destinations', destinationsCtrl.create)
router.post('/flights/:id/destinations', destinationsCtrl.addToAirport);
router.delete('/destinations/:id', destinationsCtrl.delete)

module.exports = router;