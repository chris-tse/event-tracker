"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg = require('pg');
// Comment out this line if using local database
pg.defaults.ssl = true;
if (process.env.NODE_ENV === 'development') {
    require('dotenv').config();
}
var options = {
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: process.env.NODE_ENV !== 'development',
        },
    },
};
module.exports = options;
exports.default = options;
