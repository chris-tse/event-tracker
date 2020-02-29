import { DBMeetupGroup } from '@typedefs/db';
import * as knex from 'knex/types';

/**
 * Fetch groups stored in database
 * @returns List of groups
 */
export async function getGroups(knex: knex): Promise<DBMeetupGroup[]> {
	return knex('group').then(res => res);
}
