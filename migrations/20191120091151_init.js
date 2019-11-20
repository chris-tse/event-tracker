exports.up = function(knex) {
	return knex.schema
		.createTable('user', table => {
			table.increments('id').primary();
			table.string('name').notNullable();
			table.string('email');
			table.boolean('admin');
			table.string('slack_username');
			table.string('twitch_username');
			table.string('twitter_handle');
			table.date('stream_trained_date');
			table.boolean('subscription_interest');
		})
		.createTable('group', table => {
			table.increments('id').primary();
			table.string('name');
			table.string('abbreviation');
			table.string('twitter_handle');
			table.string('meetup_url_name');
			table.integer('meetup_weekday');
			table.integer('meetup_week');
			table.datetime('meetup_time');
			table
				.integer('mgmt_team_contact_id')
				.unsigned()
				.notNullable();
			table.string('logo_link');

			table
				.foreign('mgmt_team_contact_id')
				.references('id')
				.inTable('user');
		})
		.createTable('location', table => {
			table.increments('id').primary();
			table.string('name');
			table.string('address');
			table.string('city');
			table.string('state');
			table.string('zipcode');
		})
		.createTable('event', table => {
			table.increments('id').primary();
			table
				.integer('group_id')
				.unsigned()
				.notNullable();
			table.integer('location_id').unsigned();
			table.string('meetup_id');
			table.string('title');
			table.datetime('start_time');
			table.datetime('end_time');
			table.boolean('stream');
			table.boolean('speaker_form');
			table.boolean('venue_booked');

			table
				.foreign('group_id')
				.references('id')
				.inTable('group');

			table
				.foreign('location_id')
				.references('id')
				.inTable('location');
		})
		.createTable('group_leader', table => {
			table.increments('id').primary();
			table
				.integer('user_id')
				.unsigned()
				.notNullable();
			table
				.integer('group_id')
				.unsigned()
				.notNullable();

			table
				.foreign('user_id')
				.references('id')
				.inTable('user');

			table
				.foreign('group_id')
				.references('id')
				.inTable('group');
		})
		.createTable('location_contact', table => {
			table.increments('id').primary();
			table
				.integer('user_id')
				.unsigned()
				.notNullable();
			table
				.integer('location_id')
				.unsigned()
				.notNullable();

			table
				.foreign('user_id')
				.references('id')
				.inTable('user');

			table
				.foreign('location_id')
				.references('id')
				.inTable('location');
		});
};

exports.down = function(knex) {
	return knex.schema
		.dropTable('location_contact')
		.dropTable('group_leader')
		.dropTable('event')
		.dropTable('location')
		.dropTable('group')
		.dropTable('user');
};
