import { AUTH_SECRET, GOOGLE_AUTH_CLIENT_ID, GOOGLE_AUTH_SECRET } from '$env/static/private';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { SvelteKitAuth } from '@auth/sveltekit';
import Google from '@auth/sveltekit/providers/google';
import { prisma } from './prisma';
import type { Account } from '@prisma/client';

export const { handle, signIn, signOut } = SvelteKitAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		Google({
			clientId: GOOGLE_AUTH_CLIENT_ID,
			clientSecret: GOOGLE_AUTH_SECRET
		})
	],
	secret: AUTH_SECRET,
	trustHost: true,
	callbacks: {
		async signIn({ user, account }) {
			const emailInAllowed = await prisma.allowedEmail.findUnique({
				where: { email: user.email! }
			});

			// If the email is not allowed, return false
			if (!emailInAllowed) {
				return false;
			}

			// Check if the user already exists
			const existingUser = await prisma.user.findUnique({
				where: { email: user.email! }
			});

			// If the user doesn't exist, create a new user
			if (!existingUser) {
				const newUser = await prisma.user.create({
					data: {
						email: user.email!,
						image: user.image!,
						name: user.name!,
						createdAt: new Date(),
						userRole: 'SILAN',
						limited: false
					}
				});
				// Create the account for the new user
				await prisma.account.create({
					data: {
						userId: newUser.id,
						provider: account!.provider,
						providerAccountId: account!.providerAccountId,
						access_token: account!.access_token,
						refresh_token: account!.refresh_token,
						type: 'google'
					} as Account
				});
				return true;
			}

			// Check if the account for the existing user already exists
			const existingAccount = await prisma.account.findFirst({
				where: { userId: existingUser.id, provider: account!.provider }
			});

			// If the account doesn't exist, create it
			if (!existingAccount) {
				await prisma.account.create({
					data: {
						userId: existingUser.id,
						provider: account!.provider,
						providerAccountId: account!.providerAccountId,
						access_token: account!.access_token,
						refresh_token: account!.refresh_token,
						type: 'google'
					} as Account
				});
			}

			// Return true once user and account checks pass
			return true;
		}
	},
});
