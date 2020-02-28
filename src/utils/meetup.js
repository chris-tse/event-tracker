// @flow
import fetch from 'isomorphic-fetch';

export type MeetupGroup = {
	id: number,
	name: string,
	urlname: string,
};
export type MeetupEvent = {
	id: number,
	name: string,
	time: number,
	group: MeetupGroup,
};

/**
 * Fetch upcoming events from groups in the list passed in
 * @param meetupUrlNames List of meetup URL names
 * @returns List of upcoming events
 */
export async function getUpcomingEvents(meetupUrlNames: Array<string>): Promise<Array<Array<MeetupEvent>>> {
	const requests: Array<Promise<Response>> = [];

	meetupUrlNames.forEach(name => {
		requests.push(fetch(`https://api.meetup.com/${name}/events?only=id,name,time,group`));
	});

	let responses = await Promise.all(requests).catch(console.error);
	let data = await Promise.all(responses.map(res => res.json())).catch(console.error);

	return data;
}
