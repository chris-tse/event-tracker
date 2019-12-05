/**
 * @param {import('knex')} knex
 */
exports.seed = knex => {
	return knex('group')
		.del() // clear table
		.then(() => {
			return knex('group').insert([
				{
					id: 1,
					name: 'OKC.JS',
					abbreviation: 'OKC JS',
					twitter_handle: 'okcjs',
					meetup_url_name: 'OKC-js',
					meetup_weekday: 2, // 0-6 Sun-Sat
					meetup_week: 3,
					meetup_time: '14:00',
					mgmt_team_contact_id: null,
					logo_link: null,
				},
				{
					id: 2,
					name: 'freeCodeCamp OKC',
					abbreviation: 'FCCOKC',
					twitter_handle: 'freecodecampokc',
					meetup_url_name: 'FreeCodeCampOKC',
					meetup_weekday: 0,
					meetup_week: 3,
					meetup_time: '14:00',
					mgmt_team_contact_id: null,
					logo_link: null,
				},
			]);
		});
};
