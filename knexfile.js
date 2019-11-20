require('dotenv').config();
const pg = require('pg');

// TODO: Create env variable
module.exports = {
	client: 'pg',
	connection: process.env.DATABASE_URL,
};
