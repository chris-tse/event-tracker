// @flow

export type DBMeetupGroup = {
	id: number,
	name: string,
	meetup_url_name: string,
};

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
