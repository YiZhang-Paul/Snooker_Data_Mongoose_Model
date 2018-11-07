function getConnectionString(dbConfig) {

    const url = `${dbConfig.host}/${dbConfig.name}`;

    if (process.env.NODE_ENV === 'production') {

        const user = process.env.DB_USER;
        const password = process.env.DB_PASSWORD;

        return `mongodb://${user}:${password}@${url}`;
    }

    return `mongodb://${url}`;
}

if (global.config && global.config.dbConfig) {

    const config = global.config.dbConfig;
    const mongoose = require('mongoose');

    mongoose.Promise = global.Promise;
    mongoose.connect(getConnectionString(config), { useNewUrlParser: true });

    module.exports = mongoose.connection;
}
else {

    module.exports = {};
}