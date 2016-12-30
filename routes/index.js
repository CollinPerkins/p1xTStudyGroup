var express = require('express');
var router = express.Router();

var User = require('../models/users');

router.get('/', function(req, res) {
  User.find({}, function(err, users) {
    var userProgress = users.map((users) => {
      console.log(users);
      var userObj = {
        name: users.name,
        username: users.username,
        progress: users.progress
      };
      return userObj;
    })
    console.log(userProgress);

    res.render('index', { title: 'Members', users: userProgress });
  });
});

module.exports = router;
