var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Pet = require('./models/pet').Pet;

// create a pet
router.post('/pet', function(req, res) {
  var id = new mongoose.Types.ObjectId;
  var pet = new Pet({
    name: '_name',
    type: '_type',
    _id: id
  }).save(function (err) {
    if (err) return res.send('save error: '+err);
    Pet.findById(id, function (err, docs) {
      if (err) return res.send('find pet error');
      res.send(docs);
    })
  });
});

// get all pets 
router.get('/pet', function(req, res) {
  Pet.find().exec(function (err, docs) {
    if (err) return res.send('find pet error');
    res.send(docs);  
  });
});

// get pet by id
router.get('/pet/:id', function(req, res) {
  req.params.id
})

// get pets by type
router.get('/pet/:type', function(req, res) {

});

module.exports = router;