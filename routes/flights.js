var express = require('express');
var router = express.Router();
// In order to reference our cotroller function we must 
// require our controller. (Look inside controller)
var flightsCtrl = require('../controllers/flights')

// GET /flights
// Triggering my index function
router.get('/', flightsCtrl.index);
// GET /flights/new
router.get('/new', flightsCtrl.new);
// GET /flights/:id (show functionailty)
router.get('/:id', flightsCtrl.show);
// POST / flights
router.post('/', flightsCtrl.create);

module.exports = router;
