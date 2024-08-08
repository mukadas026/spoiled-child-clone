<script lang="ts">
	// export let text:string
	export let handleClick: () => void;
</script>

<button
	class="w-full font-bold py-2 bg-black hover:bg-white text-white hover:text-black transition-colors border border-black rounded-md"
	on:click={handleClick}
>
	<!-- {text} -->
	<slot></slot>
</button>
