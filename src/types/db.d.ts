export type DBMeetupGroup = {
	id: number;
	name: string;
	meetup_url_name: string;
};

export type DBMeetupEvent = {
	id: string;
	group_id?: string;
	location_id?: string;
	meetup_id?: string;
	title?: string;
	start_time?: number;
	end_time?: number;
	stream?: boolean;
	speaker_form?: boolean;
	venue_booked?: boolean;
};
