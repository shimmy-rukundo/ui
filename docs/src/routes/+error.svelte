<script lang="ts">
	import { page } from '$app/stores';

	// we don't want to use <svelte:window bind:online> here,
	// because we only care about the online state when
	// the page first loads
	const online = typeof navigator !== 'undefined' ? navigator.onLine : true;
</script>

<svelte:head>
	<title>{$page.status}</title>
</svelte:head>

<div class="container">
	{#if online}
		{#if $page.status === 404}
			<h1>Not found!</h1>
			<p>
				If you were expecting to find something here, please drop by the
				<a href="https://svelte.dev/chat"> Discord chatroom </a>
				and let us know, or raise an issue on
				<a href="https://github.com/sveltejs/sites">GitHub</a>. Thanks!
			</p>
		{/if}
	{:else}
		<h1>It looks like you're offline</h1>
		<p>Reload the page once you've found the internet.</p>
	{/if}
</div>

<slot />

<style>
	.container {
		padding: var(--sk-page-padding-top) var(--sk-page-padding-side) 6rem var(--sk-page-padding-side);
	}

	h1,
	p {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 300;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}
</style>
