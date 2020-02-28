// @flow

import knex from 'knex';
import options from '../../knexfile';

type DBMeetupGroup = {
	id: number,
	name: string,
	meetup_url_name: string,
};

const db = knex(options);

/**
 * Fetch groups stored in database
 * @returns List of groups
 */
export async function getGroups(): Promise<Array<DBMeetupGroup>> {
	return db('group').then(res => res);
}

export function destroyConnection() {
	db.destroy();
}
