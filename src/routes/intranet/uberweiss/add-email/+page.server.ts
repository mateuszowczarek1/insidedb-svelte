import { error } from '@sveltejs/kit';
import type { RequestEvent } from './$types';
import { prisma } from './../../../../prisma';

export const actions = {
	default: async (event: RequestEvent) => {
        try {
            const formData = await event.request.formData();
            const email = formData.get('email') as string;
            await prisma.allowedEmail.create({
                data: {
                    email,
                    createdAt: new Date()
                }
            });
        }catch{
            error(417, {
                message: 'Could not add this e-mail to the DB 🙇‍♀️'
            })
        }
	}
};
