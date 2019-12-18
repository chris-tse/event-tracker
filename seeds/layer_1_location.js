/**
 * @param {import("knex")} knex
 */
exports.seed = knex => {
	// Deletes ALL existing entries
	return knex('location').del()
		.then(() => {
			// Inserts seed entries
			return knex('location').insert([
				{
					name: 'StarSpace46',
					address: '1141 W Sheridan Ave',
					city: 'Oklahoma City',
					state: 'OK',
					zipcode: '73106'
				},
				{
					name: 'Tom Love Innovation Hub',
					address: 'Three Partners Place, 201 David L Boren Blvd',
					city: 'Norman',
					state: 'OK',
					zipcode: '73072'
				},
			]);
		});
};
