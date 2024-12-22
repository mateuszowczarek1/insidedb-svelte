import { json } from '@sveltejs/kit';
import type { RequestEvent } from './$types';

export async function PATCH(event: RequestEvent) {
	const { name } = await event.request.json();

	return json({ 'robin-says': `🐕‍🦺, ${name}` });
}
