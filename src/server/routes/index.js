module.exports = [
	{
		method: 'GET',
		path: '/',
		config: { auth: false },
		handler: () => {
			return { res: 'Hello world' };
		},
	},
	{
		method: 'POST',
		path: '/',
		config: { auth: false, cors: true },
		handler: () => {
			return { res: 'Thanks for posting' };
		},
	},
];
