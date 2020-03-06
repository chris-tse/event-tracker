import { DBMeetupEvent } from '@typedefs/db';
import * as knex from 'knex/types';

/**
 * Query all events
 * @returns List of events
 */
export async function getEvents(knex: knex): Promise<DBMeetupEvent[]> {
	return knex('event').then(res => res);
}

export async function getEventsByMeetupIDs(knex: knex, meetup_id: string): Promise<DBMeetupEvent[]> {
	return knex('event')
		.where('meetup_id', meetup_id)
		.then(res => res);
}
