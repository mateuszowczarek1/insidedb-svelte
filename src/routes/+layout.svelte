<script lang="ts">
	import { autoModeWatcher } from '@skeletonlabs/skeleton';
	import '../app.css';
	import Navbar from '../components/navbar.svelte';
  let { children } = $props();
</script>

<svelte:head>{@html '<script>(' + autoModeWatcher.toString() + ')();</script>'}</svelte:head>
<Navbar />
{@render children()}
