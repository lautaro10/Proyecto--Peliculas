var config = require('config.json');
var express = require('express');
var router = express.Router();
var movieService = require('services/movie.service');

// routes
router.get('/', getAll);
router.post('/register', register);
router.get('/:id', getCurrent);
router.delete('/:_id', _delete);

module.exports = router;

function getAll(req, res) {
    movieService.getAll()
        .then(function (movies) {
            res.send(movies);
        })
        .catch(function (err) {
            res.status(400).send(err);
				});
}

function getCurrent(req, res) {
	console.log(req.params.id);
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

function register(req, res) {
	movieService.create(req.body)
			.then(function () {
					res.sendStatus(200);
			})
			.catch(function (err) {
					res.status(400).send(err);
			});
}

function _delete(req, res) {
    movieService.delete(req.params._id)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}