var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Pet = require('./models/pet').Pet;

// create a pet
router.post('/pet', function(req, res) {
  res.send(req.body.pet);
  var id = new mongoose.Types.ObjectId;
  var pet = new Pet({
    name: req.body.pet.name,
    type: req.body.pet.type,
    _id: id
  }).save(function (err) {
    if (err) return res.send('error: '+err);
    Pet.findById(id, function (err, docs) {
      if (err) return res.send('error: '+err);
      res.send(docs);
    })
  });
});

// get all pets 
router.get('/pet', function(req, res) {
  Pet.find().exec(function (err, docs) {
    if (err) return res.send('error:'+err);
    res.send(docs);  
  });
});

// get pet by name
router.get('/pet/name/:name', function(req, res) {
  Pet.find({ name: req.params.name }).exec(function (err, docs) {
    if (err) return res.send('error: '+err);
    res.send(docs);
  });
})

// get pets by type
router.get('/pet/type/:type', function(req, res) {
  Pet.find({ type: req.params.type }).exec(function (err, docs) {
    if (err) return res.send('error: '+err);
    res.send(docs);
  });
});

module.exports = router;