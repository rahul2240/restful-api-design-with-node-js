var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

var User = require('./User');


router.post('/',function(req, res){
	User.create({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	},

	User.find({}, function(err, users){
		if (err) return res.status(500).send("There is a problem");
		res.status(200).send(users);
	}));
});

router.get('/',function(req, res){
	User.find({}, function(err, users){
		if (err) return res.status(500).send("There is a problem");
		res.status(200).send(users);
	});
});


router.get('/:id', function(req, res){
	User.findById(req.params.id, function(err, user){
		if (err) return res.status(500).send('There was a problem finding a user.');
		if(!user) return res.status(400).send('User not found')
		res.status(200).send(user);	
	});
});


router.delete('/:id', function(req, res){
	User.findByIdAndRemove(req.params.id, function(err, user){
		if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User "+ user.name +" was deleted.");
	});
});

router.put('/:id', function(req, res){
	User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, user){
		if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
	});
});

module.exports = router;