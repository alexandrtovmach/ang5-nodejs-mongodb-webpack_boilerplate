var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	password: String,
    firstName: String,
    lastName: String,
    email: String,
    gender: String,
    birthday: String,
    isAdmin: Boolean,
});

module.exports = mongoose.model('User', userSchema);