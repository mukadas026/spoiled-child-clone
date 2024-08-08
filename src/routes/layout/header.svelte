<script lang="ts">
	import Icon from '@iconify/svelte';
	import { cloud, logo } from '$lib';
	import { writable } from 'svelte/store';
	import { setShowCart, setShowLeftMenu, setShowSearch, showCart, showLeftMenu, showSearch } from '../store';
	// export let showLeftMenu: boolean

	// const header = document.querySelector("header")

</script>

<header class="sticky top-0 w-full h-24 z-10 bg-white bg-red-500/0 space-y-2 py-5 border-b px-2 md:px-12 lg:px-60 ">
	<div class="flex items-center justify-between">
		<div class="flex items-end justify-center gap-x-4 md:gap-x-10">
			<button class="" on:click={() => setShowLeftMenu($showLeftMenu)}>
				<Icon icon="heroicons:bars-2" font-size={20} />
			</button>

			<button class="" on:click={() => setShowSearch($showSearch)}>
				<Icon icon="material-symbols-light:search" font-size={20} />
			</button>
		</div>
		<a href="/" class="bg-blue-500/0 max-w-32">
		<!-- <a href="/" class="bg-blue-500"> -->
			<img src={logo} alt="" class="" />
			<!-- <img src={logo} alt="" class="scale-[0.4]" /> -->
			 <!-- helloworld -->
		</a>
		<div class="flex items-end justify-center gap-x-4 md:gap-x-10">
			<button>
				<Icon icon="solar:user-linear" font-size={20} />
			</button>

			<button on:click={() => setShowCart($showCart)}>
				<Icon icon="teenyicons:bag-outline" font-size={20} />
			</button>
		</div>
	</div>
	<nav class="flex items-center justify-center gap-x-6 font-bold text-sm">
		<a href="/hair">Hair</a>
		<a href="/skin">Skin</a>
		<a href="/wellness">Wellness</a>
		<a href="/ask" class="flex items-center gap-x-2">
			<img src={cloud} alt="" class="max-w-6 bg-red/0" />
			<span>Ask SpoiledBrain</span>
		</a>
	</nav>
</header>
