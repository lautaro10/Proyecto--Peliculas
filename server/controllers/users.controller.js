// Config
var config = require('config.json');
var express = require('express');
var router = express.Router();
var userService = require('services/user.service');

// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/', getAll);
router.get('/current', getCurrent);
router.put('/:_id', update);
router.delete('/:_id', _delete);

// Export
module.exports = router;

/**
 * Function to authenticate an admin user
 */
function authenticate(req, res) {
	userService.authenticate(req.body.username, req.body.password)
		.then(function (user) {
			if (user) {
				// authentication successful
				res.send(user);
			} else {
				// authentication failed
				res.status(400).send('Usuario y/o constraseña incorrecta');
			}
		})
		.catch(function (err) {
			res.status(400).send(err);
		});
}

/**
 * Function to register an admin user
 */
function register(req, res) {
	userService.create(req.body)
		.then(function () {
			res.sendStatus(200);
		})
		.catch(function (err) {
			res.status(400).send(err);
		});
}

/**
 * Function to get all admin users
 */
function getAll(req, res) {
	userService.getAll()
		.then(function (users) {
			res.send(users);
		})
		.catch(function (err) {
			res.status(400).send(err);
		});
}

/**
 * Function to get an current user
 */
function getCurrent(req, res) {
	userService.getById(req.user.sub)
		.then(function (user) {
			if (user) {
				res.send(user);
			} else {
					res.sendStatus(404);
			}
		})
		.catch(function (err) {
			res.status(400).send(err);
		});
}

/**
 * Function to update an user
 */
function update(req, res) {
	userService.update(req.params._id, req.body)
		.then(function () {
			res.sendStatus(200);
		})
		.catch(function (err) {
			res.status(400).send(err);
		});
}

/**
 * Function to delete an admin user
 */
function _delete(req, res) {
	userService.delete(req.params._id)
		.then(function () {
			res.sendStatus(200);
		})
		.catch(function (err) {
			res.status(400).send(err);
		});
}