/**
 * @param {import("knex")} knex
 */
exports.seed = knex => {
	// Deletes ALL existing entries
	return knex('group')
		.del()
		.then(() => {
			// Inserts seed entries
			return knex('group').insert([
				{
					name: 'freeCodeCamp OKC',
					abbreviation: 'FCCOKC',
					twitter_handle: 'freecodecampokc',
					meetup_url_name: 'FreeCodeCampOKC',
				},
				{
					name: 'CocoaHeads OKC',
					abbreviation: 'CCHOKC',
					meetup_url_name: 'CocoaHeads-OKC',
				},
				{
					name: 'OKC-Sharp',
					abbreviation: 'OKC#',
					meetup_url_name: 'OKC-Sharp',
				},
			]);
		});
};
