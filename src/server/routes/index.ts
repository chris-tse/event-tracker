import { ServerRoute } from 'hapi/index';

const indexRoutes: ServerRoute[] = [
	{
		path: '/',
		method: 'GET',
		options: { auth: false },
		handler: () => {
			return { res: 'Hello world' };
		},
	},
	{
		path: '/',
		method: 'POST',
		options: {
			auth: false,
			cors: true,
		},
		handler: () => {
			return { res: 'Thanks for posting' };
		},
	},
];

export default indexRoutes;
