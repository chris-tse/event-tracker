import * as fetch from 'isomorphic-fetch';
import { MeetupEvent } from '@typedefs/meetup';
/**
 * Fetch upcoming events from groups in the list passed in
 * @param meetupUrlNames List of meetup URL names
 * @returns List of upcoming events
 */
export async function getUpcomingEvents(meetupUrlNames: string[]): Promise<MeetupEvent[][]> {
	const requests: Promise<Response>[] = meetupUrlNames.map(name => {
		return fetch(`https://api.meetup.com/${name}/events?only=id,name,time,group`);
	});

	try {
		let responses = await Promise.all(requests.map(req => req.then(res => res.json())));
		let data = await Promise.all(responses);
		return data;
	} catch (error) {
		throw new Error(error);
	}
}
