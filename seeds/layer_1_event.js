/**
 * @param {import("knex")} knex
 */
exports.seed = knex => {
	// Deletes ALL existing entries
	return knex('user')
		.del()
		.then(() => {
			// Inserts seed entries
			return knex('event').insert([
				{
					meetup_id: '267087235',
					title: 'Promises and Async/Await with Vance Lucas',
					start_time: knex.raw('to_timestamp(1583694000)'),
				},
				{
					meetup_id: '267439534',
					title: 'GraphQL with Thomas Evans',
					start_time: knex.raw('to_timestamp(1583170200)'),
				},
			]);
		});
};
