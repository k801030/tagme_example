var express = require('express');
var router = express.Router();

router.get('/yourtags', function(req, res) {
  res.render('form/yourtags', { title: 'TagMe' });
});

router.get('/mytags', function(req, res) {
  res.render('form/mytags', { title: 'TagMe' });
});

router.get('/contact', function(req, res) {
  res.render('form/contact', { title: 'TagMe' });
});

module.exports = router;
