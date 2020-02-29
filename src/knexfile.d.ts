import { Config } from 'knex';

declare module 'knexfile' {
	const options: Config;
	export = options;
}
