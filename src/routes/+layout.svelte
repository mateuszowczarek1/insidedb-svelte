<script>
	import { autoModeWatcher } from '@skeletonlabs/skeleton';
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>{@html '<script>(' + autoModeWatcher.toString() + ')();</script>'}</svelte:head>

{@render children()}
