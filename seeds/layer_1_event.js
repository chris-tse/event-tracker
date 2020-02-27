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
					id: '267087235',
					name: 'Promises and Async/Await with Vance Lucas',
					time: 1583694000000,
				},
				{
					id: '267439534',
					name: 'GraphQL with Thomas Evans',
					time: 1583170200000,
				},
			]);
		});
};
