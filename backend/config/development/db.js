module.exports = {
	dbname: 'newproj',
	uri: 'mongodb://localhost:27017',
	mocked_db: false,
	opts: {
		autoReconnect: true,
		poolSize: 40,
		useMongoClient: true
	}
};