const config = global.config.dbConfig;
const connectionString = `mongodb://${config.host}/${config.name}`;
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(connectionString, { useNewUrlParser: true });

module.exports = mongoose.connection;