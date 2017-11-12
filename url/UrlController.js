var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

var Url = require('./Url');


router.post('/',function(req, res){
	Url.create({
		name: req.body.name
	},

	function(err, url){
		if (err) return res.status(500).send("There is a problem");
		res.status(200).send(url.id);
	});
});

router.get('/:id', function(req, res){

	Url.findById(req.params.id, {_id: false,name: true}, function(err, url){
		if (err) return res.status(500).send("There is a problem");
		res.status(200).redirect(url.name);
	});

});





module.exports = router;