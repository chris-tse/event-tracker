/**
 * @param {import("knex")} knex
 */
exports.up = knex => {
	return knex.schema
		.createTable('user', table => {
			table
				.uuid('id')
				.primary()
				.defaultTo(knex.raw('uuid_generate_v4()'));
			table.string('name');
			table.string('email');
			table.string('password').notNullable();
			table.boolean('admin').defaultTo(false);
			table.string('slack_username');
			table.string('twitch_username');
			table.string('twitter_handle');
			table.date('stream_trained_date');
			table.boolean('subscription_interest');
		})
		.createTable('group', table => {
			table
				.uuid('id')
				.primary()
				.defaultTo(knex.raw('uuid_generate_v4()'));
			table.string('name');
			table.string('abbreviation');
			table.string('twitter_handle');
			table.string('meetup_url_name');
			table.uuid('meetup_weekday');
			table.uuid('meetup_week');
			table.datetime('meetup_time');
			table.uuid('mgmt_team_contact_id');
			table.string('logo_link');

			table
				.foreign('mgmt_team_contact_id')
				.references('id')
				.inTable('user');
		})
		.createTable('location', table => {
			table
				.uuid('id')
				.primary()
				.defaultTo(knex.raw('uuid_generate_v4()'));
			table.string('name').notNullable();
			table.string('address');
			table.string('city');
			table.string('state');
			table.string('zipcode');
		})
		.createTable('event', table => {
			table
				.uuid('id')
				.primary()
				.defaultTo(knex.raw('uuid_generate_v4()'));
			table.uuid('group_id').notNullable();
			table.uuid('location_id').notNullable();
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
		.createTable('video', table => {
			table
				.uuid('id')
				.primary()
				.defaultTo(knex.raw('uuid_generate_v4()'));
			table.uuid('parent_id');
			table.string('twitch_id');
			table.string('youtube_id');
			table.uuid('event_id');
			table.string('title');
			table.text('description');

			table
				.foreign('parent_id')
				.references('id')
				.inTable('video');

			table
				.foreign('event_id')
				.references('id')
				.inTable('event');
		})
		.createTable('group_leader', table => {
			table
				.uuid('id')
				.primary()
				.defaultTo(knex.raw('uuid_generate_v4()'));
			table.uuid('user_id').notNullable();
			table.uuid('group_id').notNullable();

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
			table
				.uuid('id')
				.primary()
				.defaultTo(knex.raw('uuid_generate_v4()'));
			table.uuid('user_id').notNullable();
			table.uuid('location_id').notNullable();

			table
				.foreign('user_id')
				.references('id')
				.inTable('user');

			table
				.foreign('location_id')
				.references('id')
				.inTable('location');
		})
		.createTable('group_streamer', table => {
			table
				.uuid('id')
				.primary()
				.defaultTo(knex.raw('uuid_generate_v4()'));
			table.uuid('user_id');
			table.uuid('group_id');
			table.boolean('default');

			table
				.foreign('user_id')
				.references('id')
				.inTable('user');

			table
				.foreign('group_id')
				.references('id')
				.inTable('group');
		})
		.createTable('group_speaker', table => {
			table
				.uuid('id')
				.primary()
				.defaultTo(knex.raw('uuid_generate_v4()'));
			table.uuid('user_id');
			table.uuid('group_id');

			table
				.foreign('user_id')
				.references('id')
				.inTable('user');

			table
				.foreign('group_id')
				.references('id')
				.inTable('group');
		})
		.createTable('user_group', table => {
			table
				.uuid('id')
				.primary()
				.defaultTo(knex.raw('uuid_generate_v4()'));
			table.uuid('user_id');
			table.uuid('group_id');

			table
				.foreign('user_id')
				.references('id')
				.inTable('user');

			table
				.foreign('group_id')
				.references('id')
				.inTable('group');
		});
};

/**
 * @param {import("knex")} knex
 */
exports.down = knex => {
	return knex.schema
		.dropTable('user_group')
		.dropTable('group_streamer')
		.dropTable('group_speaker')
		.dropTable('location_contact')
		.dropTable('group_leader')
		.dropTable('video')
		.dropTable('event')
		.dropTable('location')
		.dropTable('group')
		.dropTable('user');
};
