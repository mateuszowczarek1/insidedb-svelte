<script lang="ts">
	import { autoModeWatcher } from '@skeletonlabs/skeleton';
	import '../app.css';
	import Navbar from '../components/navbar/navbar.svelte';
	import Hero from '../components/hero/hero.svelte';
	import Footer from '../components/footer/footer.svelte';
  let { children } = $props();
</script>

<svelte:head>{@html '<script>(' + autoModeWatcher.toString() + ')();</script>'}</svelte:head>
<Navbar />
<Hero />
{@render children()}
<Footer />
