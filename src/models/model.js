const mongoose = require("mongoose");

// create an schema
var Schema = mongoose.Schema;
var userSchema = new Schema({
	first_name: String,
	last_name: String,
	pass: String,
	email: String,
	// age: Number,
});

var userModel = mongoose.model("users", userSchema);
module.exports = userModel;
