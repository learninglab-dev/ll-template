var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'LL Template',
    message: 'Welcome to the LL Template.',
    image: 'https://ll-show.s3.amazonaws.com/public/mk/mediawork/2019/11/inside-the-tentacle_360.gif' 
  });
});

module.exports = router;
