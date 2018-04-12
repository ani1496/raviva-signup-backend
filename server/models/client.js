const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

var ClientModel = new mongoose.Schema({
	firstName: {
		type: String
	},

	lastName: {
		type: String
	},

	phone: {
		type: String
	},

	email: {
		type: String
	}
});

const Client = mongoose.model('Client', ClientModel);

module.exports = { Client };
