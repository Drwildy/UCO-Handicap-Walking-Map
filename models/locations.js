const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const locationSchema = new Schema({

	lat: Number,
	lng: Number,
	title: String

});

module.exports = mongoose.model('Locations', locationSchema);
