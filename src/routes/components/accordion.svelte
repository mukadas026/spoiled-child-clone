<script lang="ts">
	import Icon from '@iconify/svelte';
	export let text: string;
	let open = false;
</script>

<button
	on:click={() => {
		open = !open;
	}}
	class="w-full h-auto border-t border-b"
>
	<div class="h-16 flex items-center justify-between">
		<span> {text} </span>
		<button>
			<Icon icon="ep:arrow-up-bold" rotate={open ? 0 : 90} />
		</button>
	</div>
	<div class={`w-full ${open ? 'h-60 pt-4' : 'h-0'} transition-all`}>
		{#if open}
			<slot></slot>
		{/if}
	</div>
</button>
