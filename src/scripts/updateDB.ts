import { getGroups } from '../queries/groups';
import { getUpcomingEvents } from '../utils/meetup';
import * as Knex from 'knex';
import { DBMeetupGroup } from '@typedefs/db';
import { MeetupEvent } from '@typedefs/meetup';

async function main() {
	// Initialize db connection to pass into queries
	const knex = Knex(require('../knexfile'));

	let groups: DBMeetupGroup[];
	let upcomingEventsNested: MeetupEvent[][];

	try {
		groups = await getGroups(knex);
	} catch (error) {
		console.error('DB Error: Could not retrieve groups', error);
		process.exit(1);
	}

	const groupMeetupUrlNames = groups.map(g => {
		return g.meetup_url_name;
	});

	console.log(groupMeetupUrlNames);

	try {
		upcomingEventsNested = await getUpcomingEvents(groupMeetupUrlNames);
	} catch (error) {
		console.error(error, 'Unable to fetch upcoming events');
		process.exit(1);
	}

	// const upcomingEvents = upcomingEventsNested.reduce((acc, next) => acc.concat(next), []);

	console.log(upcomingEventsNested.flat());

	// For each upcomingEvent: event
	// Check if event ID in event table
	//	a. If so, check if pertinent details have changed, update those if so
	//		i. Pull dbevent where dbevent.meetup_id === event.id
	//		ii. Check whether dbevent start_time, title is different from event.time and event.name
	//	b. If not, insert new event
	//

	knex.destroy();
}

main();
