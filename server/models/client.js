const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

var ClientModel = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
		minlength: 2
	},

	lastName: {
		type: String,
		required: true,
		minlength: 2
	},

	phone: {
		type: String,
		required: true,
		minlength: 2
	},

	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 1,
		unique: 1,
		validate: {
			validator: validator.isEmail,
			message: '{VALUE} is not a valid email'
		}
	}
});

const Client = mongoose.model('Client', ClientModel);

module.exports = { Client };
