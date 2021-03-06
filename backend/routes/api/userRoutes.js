const apiResponse = require('express-api-response'),
	userService = require('../../services/userService'),
	userRepository = require('../../repositories/userRepository'),
	baseUrl = '/api/user/',
	isAdmin = require('../../middleware/isAdminMiddleware'),
	isLoggedIn = require('../../middleware/isLoggedInMiddleware');

module.exports = function (app) {

	app.get(baseUrl + 'me', isLoggedIn, function (req, res, next) {
		userRepository.getById(req.session.passport.user, function (err, data) {
			res.data = data;
			res.err = err;
			next();
		});
	}, apiResponse);

	app.get(baseUrl, isLoggedIn, function (req, res, next) {
		userRepository.getAll(function (err, data) {
			res.data = data;
			res.err = err;
			next();
		});
	}, apiResponse);

	app.get(baseUrl + ':id', function (req, res, next) {
		userService.getUserById(req, function (err, data) {
			res.data = data;
			res.err = err;
			next();
		});
	}, apiResponse);

	app.post(baseUrl, function (req, res, next) {
		userService.addItem(req.body, function (err, data) {
			res.data = {
				"registered": "true"
			};
			res.err = err;
			next();
		});
	}, apiResponse);

	app.put(baseUrl + ':id', function (req, res, next) {
		userService.updateItem(req.params.id, req.body, function (err, data) {
			res.data = data;
			res.err = err;
			next();
		});
	}, apiResponse);

	app.delete(baseUrl + ':id', isAdmin, function (req, res, next) {
		userRepository.deleteById(req.params.id, function (err, data) {
			res.data = data;
			res.err = err;
			next();
		});
	}, apiResponse);

};
