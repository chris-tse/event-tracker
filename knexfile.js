const pg = require('pg');

if (process.env.NODE_ENV === 'development') {
	require('dotenv').config();
} else {
	pg.defaults.ssl = true;
}

// TODO: Create env variable
module.exports = {
	client: 'pg',
	connection: process.env.DATABASE_URL,
};
