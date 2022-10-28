var express = require('express');
var router = express.Router();
var destinationsCtrl = require('../controllers/destinations');

// POST /flights/:id/destinations (create functionality)
router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports = router;