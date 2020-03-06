/**
 * @param {import("knex")} knex
 */
exports.seed = async knex => {
	// Deletes ALL existing entries
	return knex('event')
		.del()
		.then(async () => {
			// Inserts seed entries
			return knex('event').insert([
				{
					meetup_id: '267087235',
					title: 'Promises and Async/Await with Vance Lucas',
					start_time: knex.raw('to_timestamp(1583694000)'),
					group_id: (
						await knex('group')
							.where({ name: 'freeCodeCamp OKC' })
							.select('id')
					)[0].id,
					last_updated: knex.raw('to_timestamp(1582152330)'),
				},
				{
					meetup_id: '267192480',
					title: 'Lightning Talks',
					start_time: knex.raw('to_timestamp(1589214600)'),
					group_id: (
						await knex('group')
							.where({ name: 'OKC-Sharp' })
							.select('id')
					)[0].id,
					last_updated: knex.raw('to_timestamp(1580406731)'),
				},
			]);
		});
};
