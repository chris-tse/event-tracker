exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("user", table => {
      table.increments("id").primary();
      table.string("name");
      table.string("email");
      table.boolean("admin");
      table.string("slack_username");
      table.string("twitch_username");
      table.string("twitter_handle");
      table.date("stream_trained_date");
      table.boolean("subscription_interest");
    })
  ]);
};

exports.down = function(knex) {};
