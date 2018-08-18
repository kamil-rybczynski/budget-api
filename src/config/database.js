const mongoose = require('mongoose');
const constants = require('./constants');

// Remove the warning with Promise
mongoose.Promise = global.Promise;

// If debug run the mongoose debug options
mongoose.set('debug', constants.mongodb.debug);

mongoose.connect(constants.mongodb.url);