import { DBMeetupEvent } from '@typedefs/db';
import * as knex from 'knex/types';

/**
 * Query all events
 * @returns List of events
 */
export async function getEvents(knex: knex): Promise<DBMeetupEvent[]> {
	return knex('event').then(res => res);
}

export async function getEventByID(knex: knex, id: string): Promise<DBMeetupEvent[]> {
	return knex('event').then(res => res);
}
