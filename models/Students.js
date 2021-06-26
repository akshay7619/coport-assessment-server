const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	fatherName: {
		type: String,
		required: true,
	},
	motherName: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('Students', StudentSchema);