//TODO this needs work, needs research

const express = require('express')
const router = express.Router({ caseSensitive: true })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
