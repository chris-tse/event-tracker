import Hapi from '@hapi/hapi';

function validate() {
	return { isValid: true };
}

const init = async () => {
	const server = Hapi.server({
		port: 3000,
		host: 'localhost',
	});

	await server.register(require('hapi-auth-jwt2'));

	server.auth.strategy('token', 'jwt', {
		key: 'SomeSecretKey',
		validate,
	});

	server.auth.default('token');

	await server.start();
	console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', err => {
	console.log(err);
	process.exit(1);
});

init();
