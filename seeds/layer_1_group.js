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
				},
				{
					name: 'OKC SQL Server',
					abbreviation: 'OKSQL',
				},
				{
					name: 'OKC-Sharp',
					abbreviation: 'OKC#',
				},
			]);
		});
};
