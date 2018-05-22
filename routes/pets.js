var express = require('express');
var router = express.Router();

var pets = [
  { id: 1, name: "Leon", type: "dog", age: 3},
  { id: 2, name: "Zelda", type: "dog", age: 2},
  { id: 3, name: "Daisy", type: "dog", age: 3}
]

/* GET pet listings. */
router.get('/', function(req, res) {
  res.render('pets', { pets: pets });
});

module.exports = router;