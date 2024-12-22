<script lang="ts">
	import { page } from '$app/state';
	let message: string = '';
	if (page.error?.message) {
		message = page.error.message;
	} else {
		message = 'Generic error';
	}
</script>
<div class="font-semibold p-6 flex items-center justify-center my-6">
	<h2 class="text-xl">{message}</h2>
</div>
