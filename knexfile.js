const pg = require('pg');

// Comment out this line if using local database
pg.defaults.ssl = true;

if (process.env.NODE_ENV === 'development') {
	require('dotenv').config();
}

module.exports = {
	client: 'pg',
	connection: process.env.DATABASE_URL,
};
