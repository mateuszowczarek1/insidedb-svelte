<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/state';
	import InsideLogo from './navbar/insideLogo.svelte';
	let session = page.data.session;
</script>

<nav
	class="flex flex-col flex-wrap items-center justify-center gap-4 bg-surface-600 px-4 py-6 lg:flex-row lg:justify-between lg:gap-1"
>
	<InsideLogo />
	<div
		class="flex h-[100%] flex-row flex-wrap items-center justify-center gap-6 p-2 lg:flex-nowrap lg:justify-normal lg:gap-2"
	>
		<div class="avatar-container">
			<Avatar src={session?.user?.image || 'https://i.pravatar.cc/300'} />
		</div>
		<div>Witaj, {session?.user?.name || 'Gościu'}!</div>
	</div>
</nav>
<section class="flex flex-row flex-wrap items-center justify-center gap-4 bg-surface-700 px-4 py-4">
	{#if session?.user?.email}
		<button on:click={() => signOut()} class="variant-filled-secondary btn">Wyloguj się</button>
	{:else}
		<button on:click={() => signIn('google')} class="variant-filled-primary btn">Zaloguj się</button
		>
	{/if}
</section>

<style>
	.avatar-container {
		width: 8vh;
	}
</style>
