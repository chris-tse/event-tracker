// @flow
import { destroyConnection, getGroups } from '../utils/db';
import { getUpcomingEvents } from '../utils/meetup';

async function main() {
	let groups;
	let upcomingEventsNested;

	try {
		groups = await getGroups();
	} catch (error) {
		console.error(error, 'DB Error: Could not retrieve groups');
		process.exit(1);
		return;
	}

	const groupMeetupUrlNames = ['sjkdfhsdhfjksdhkjfsdf'];
	// const groupMeetupUrlNames = groups.map(g => g.meetup_url_name);

	try {
		upcomingEventsNested = await getUpcomingEvents(groupMeetupUrlNames);
	} catch (error) {
		console.error(error, 'Unable to fetch upcoming events');
		process.exit(1);
		return;
	}

	const upcomingEvents = upcomingEventsNested.reduce((acc, next) => acc.concat(next), []);

	console.log(upcomingEvents);

	// For each upcomingEvent: event
	// Check if event ID in event table
	//	a. If so, check if pertinent details have changed, update those if so
	//		i. Pull dbevent where dbevent.meetup_id === event.id
	//		ii. Check whether dbevent start_time, title is different from event.time and event.name
	//	b. If not, insert new event
	//

	destroyConnection();
}

main();
