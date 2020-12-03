var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/tickets');

router.post('/flights/:id/tickets', ticketsCtrl.create);

module.exports = router;