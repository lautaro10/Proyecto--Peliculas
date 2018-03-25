// Config
var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');

// BD
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('movies');

// Services
var service = {};
service.getAll = getAll;
service.getById = getById;
service.create = create;
service.delete = _delete;

// Exports
module.exports = service;

/**
 * Function to get all movies from the DB
 */
function getAll() {
	var deferred = Q.defer();
	db.movies.find().toArray(function (err, movies) {
		if (err) deferred.reject(err.name + ': ' + err.message);
		// return movies (without hashed passwords)
		movies = _.map(movies, function (movie) {
			return _.omit(movie, 'hash');
		});
		deferred.resolve(movies);
	});
	return deferred.promise;
}

/**
 * Function to get at movie from the DB
 */
function getById(_id) {
	var deferred = Q.defer();
	db.movies.findById(_id, function (err, movie) {
		if (err) deferred.reject(err.name + ': ' + err.message);
		if (movie) {
			// return movie (without hashed password)
			deferred.resolve(_.omit(movie, 'hash'));
		} else {
			// movie not found
			deferred.resolve();
		}
	});
	return deferred.promise;
}

/**
 * Function to get add movie to DB
 */
function create(movieParam) {
	var deferred = Q.defer();
	// validation
	db.movies.findOne(
		{ title: movieParam.title },
		function (err, movie) {
			if (err) deferred.reject(err.name + ': ' + err.message);
			if (movie) {
					// title already exists
					deferred.reject('La pelicula "' + movieParam.title + '" ya fue agregada');
			} else {
					createmovie();
				}
		}
	);

	function createmovie() {
		db.movies.insert(
		movieParam,
		function (err, doc) {
			if (err) deferred.reject(err.title + ': ' + err.message);
			deferred.resolve();
		});
	}
	return deferred.promise;
}

/**
 * Function to delete movie from the DB
 */
function _delete(_id) {
	var deferred = Q.defer();
	db.movies.remove(
		{ _id: mongo.helper.toObjectID(_id) },
		function (err) {
			if (err) deferred.reject(err.title + ': ' + err.message);
			deferred.resolve();
		});
	return deferred.promise;
}