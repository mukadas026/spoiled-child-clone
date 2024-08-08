<script lang="ts">
	export let imageURL: string;
	export let href: string;
	export let rotate: number;
</script>

<a
	{href}
	class="relative w-full h-20 space-x-1 ring-[0.251px] hover:ring-1 ring-gray-400 rounded-md font-bold hover:ring-green-500 bg-transparent hover:bg-green-500/20 transition-all duration-300 hover:text-green-500 flex items-center justify-left px-8 overflow-hidden"
>
	<slot></slot>
	<img
		src={imageURL}
		alt=""
		class={`absolute bg-red-500/0  ${rotate === 1 ? 'rotate-90 h-48 right-4' : rotate === 2 ? 'rotate-0 w-24 right-0' : 'w-44 right-0'}`}
	/>
</a>
