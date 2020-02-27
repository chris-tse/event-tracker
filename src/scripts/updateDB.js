import knex from 'knex';
import fetch from 'isomorphic-fetch';
import options from '../../knexfile';

async function getGroups() {
	const db = knex(options);

	return db('group')
		.select('meetup_url_name')
		.then(res => res)
		.finally(() => {
			db.destroy();
		});
}

// function getLocation() {
// 	const db = knex(options);

// 	return db('location')
// 		.where('name', 'StarSpace46')
// 		.then(res => res)
// 		.finally(() => {
// 			db.destroy();
// 		});
// }

async function main() {
	const groups = await getGroups();
	const groupMeetupUrlNames = groups.map(g => g.meetup_url_name);

	console.log(groupMeetupUrlNames);

	const fetches = [];

	groupMeetupUrlNames.forEach(name => {
		fetches.push(fetch(`https://api.meetup.com/${name}/events?only=id,name,time`));
	});

	let responses = await Promise.all(fetches);

	let data = await Promise.all(responses.map(res => res.json()));

	console.log(data);
}

main();
