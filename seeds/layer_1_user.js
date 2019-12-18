/**
 * @param {import("knex")} knex
 */
exports.seed = knex => {
	// Deletes ALL existing entries
	return knex('user').del()
		.then(() => {
			// Inserts seed entries
			return knex('user').insert([
				{
					name: 'Admin User',
					email: 'admin@email.com',
					password: knex.raw("crypt('adminpassword', gen_salt('bf', 8))"),
					admin: true,
				},
				{
					name: 'Regular User',
					email: 'regular@email.com',
					password: knex.raw("crypt('regularpassword', gen_salt('bf', 8))"),
					admin: false,
				},
			]);
		});
};
