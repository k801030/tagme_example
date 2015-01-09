var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var pet = require('./models/pet').Pet;

router.post('/pet', function(req, res){
  res.send('usage: create pet');
});

router.get('/pet', function(req, res){
  res.send('usage: get pet');
});