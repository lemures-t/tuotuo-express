var express = require('express');
var router = express.Router();

/* GET home page. */

/*new qq.maps.LatLng(39.910, 116.399),
new qq.maps.LatLng(39.920, 116.405),
new qq.maps.LatLng(39.930, 116.420)*/
var coordinators = [[39.783,116.064],[39.782, 116.070],[39.780, 116.075]]

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


router.get('/map',function(req,res){

  res.render('map',{
    coordinators : coordinators
  });
});

router.post('/coordinator',function(req,res){
  coordinators.push([parseFloat(req.body.x),parseFloat(req.body.y)]);
  console.log(coordinators[coordinators.length -1]);
  res.send('good');
})



module.exports = router;
