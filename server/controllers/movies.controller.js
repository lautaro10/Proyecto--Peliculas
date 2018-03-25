// Config
var config = require('config.json');
var express = require('express');
var router = express.Router();
var movieService = require('services/movie.service');

// routes
router.get('/', getAll);
router.post('/register', register);
router.get('/:id', getCurrent);
router.delete('/:_id', _delete);

// Export
module.exports = router;

/**
 * Function to get all movies
 */
function getAll(req, res) {
	movieService.getAll()
		.then(function (movies) {
			res.send(movies);
		})
		.catch(function (err) {
			res.status(400).send(err);
		});
}

/**
 * Function to get current movie
 */
function getCurrent(req, res) {
	movieService.getById(req.params.id)
		.then(function (movie) {
			if (movie) {
				res.send(movie);
			} else {
					res.sendStatus(404);
			}
		})
		.catch(function (err) {
			res.status(400).send(err);
		});
}

/**
 * Function to get add movie
 */
function register(req, res) {
	movieService.create(req.body)
		.then(function () {
			res.sendStatus(200);
		})
		.catch(function (err) {
			res.status(400).send(err);
		});
}

/**
 * Function to delete a movie
 */
function _delete(req, res) {
	movieService.delete(req.params._id)
		.then(function () {
			res.sendStatus(200);
		})
		.catch(function (err) {
			res.status(400).send(err);
		});
}