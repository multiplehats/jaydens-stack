import { middleware } from '../trpc';

const perfMiddleware = middleware(async ({ path, type, next }) => {
	const start = Date.now();
	performance.mark('Start');
	const result = await next();
	performance.mark('End');
	performance.measure(`[${result.ok ? 'OK' : 'ERROR'}][$1] ${type} '${path}'`, 'Start', 'End');
	const durationMs = Date.now() - start;

	if (import.meta.env.DEV) {
		console.log(`[${result.ok ? 'OK' : 'ERROR'}][ ${durationMs}ms ] ${type} '${path}'`);
	}

	return result;
});

export default perfMiddleware;
