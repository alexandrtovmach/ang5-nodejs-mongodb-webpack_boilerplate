var injectData = require('../../middleware/injectedDataMiddleware');

module.exports = function(app){

	app.get('/', function (req, res, next) {
		injectData(req, res, {}, false);
	});

	app.get('/main', function(req, res, next){
		injectData(req, res, {}, false);
	});
};