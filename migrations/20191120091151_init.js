/**
 * @param {import('knex')} knex
 */
exports.up = knex => {
	return knex.schema
		.createTable('user', table => {
			table.increments('id').primary();
			table.string('name').notNullable();
			table.string('email').notNullable();
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
			table.integer('meetup_weekday').unsigned();
			table.integer('meetup_week').unsigned();
			table.time('meetup_time', { precision: 0 });
			table.integer('mgmt_team_contact_id').unsigned();
			table.string('logo_link');

			table
				.foreign('mgmt_team_contact_id')
				.references('id')
				.inTable('user');
		})
		.createTable('location', table => {
			table.increments('id').primary();
			table.string('name').notNullable();
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
			table
				.integer('location_id')
				.unsigned()
				.notNullable();
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
			table.increments('id').primary();
			table.integer('parent_id').unsigned();
			table.string('twitch_id');
			table.string('youtube_id');
			table.integer('event_id').unsigned();
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
		})
		.createTable('group_streamer', table => {
			table.increments('id').primary();
			table.integer('user_id').unsigned();
			table.integer('group_id').unsigned();
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
			table.increments('id').primary();
			table.integer('user_id').unsigned();
			table.integer('group_id').unsigned();

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
			table.increments('id').primary();
			table.integer('user_id').unsigned();
			table.integer('group_id').unsigned();

			table
				.foreign('user_id')
				.references('id')
				.inTable('user');

			table
				.foreign('group_id')
				.references('id')
				.inTable('group');
		})
		.createTable('event_streamer', table => {
			table.increments('id').primary();
			table.integer('user_id').unsigned();
			table.integer('event_id').unsigned();

			table
				.foreign('user_id')
				.references('id')
				.inTable('user');

			table
				.foreign('event_id')
				.references('id')
				.inTable('event');
		})
		.createTable('event_presentation', table => {
			table.increments('id').primary();
			table.integer('user_id').unsigned();
			table.integer('event_id').unsigned();
			table.string('title');

			table
				.foreign('user_id')
				.references('id')
				.inTable('user');

			table
				.foreign('event_id')
				.references('id')
				.inTable('event');
		})
		.createTable('highlighter', table => {
			table.increments('id').primary();
			table.integer('highlighter_id').unsigned();
			table.integer('video_id').unsigned();

			table
				.foreign('highlighter_id')
				.references('id')
				.inTable('user');

			table
				.foreign('video_id')
				.references('id')
				.inTable('video');
		});
};

/**
 * @param {import('knex')} knex
 */
exports.down = knex => {
	return knex.schema
		.dropTable('highlighter')
		.dropTable('event_presentation')
		.dropTable('event_streamer')
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
