const pg = require('pg');
import { Config } from 'knex/types';

// Comment out this line if using local database
pg.defaults.ssl = true;
if (process.env.NODE_ENV === 'development') {
	require('dotenv').config();
}
export const options: Config = {
	client: 'pg',
	connection: {
		connectionString: process.env.DATABASE_URL,
		ssl: {
			rejectUnauthorized: process.env.NODE_ENV !== 'development',
		},
	},
};

module.exports = options;
