import { MeetupEvent } from '@typedefs/meetup';
import { getEventsByMeetupIDs as getEventByMeetupID } from '../queries/events';
import Knex = require('knex');

export async function updateDBFromMeetupEventID(knex: Knex, meetup_id: string): Promise<void> {
	console.log('fetching ID of ', meetup_id);
	let dbEvent;

	try {
		dbEvent = await getEventByMeetupID(knex, meetup_id);
	} catch (error) {
		console.error(error);
	}

	console.log(dbEvent);
}
