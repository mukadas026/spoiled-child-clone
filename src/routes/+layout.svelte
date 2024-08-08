<script lang="ts">
	/// <reference types="../types/types.d.ts" />
	import '../app.css';
	import Search from './layout/search.svelte';
	import LeftMenu from './layout/leftMenu.svelte';
	import Cart from './layout/cart.svelte';
	import Header from './layout/header.svelte';

	// const doc = document.querySelector("")
	// const y = document

	// console.log(y)

</script>

<div class="w-screen max-w-[1920px] min-h-screen relative font-maison ">
	<Search />
	<LeftMenu />
	<Cart />
	<Header />
	<main class="">
		<slot></slot>
	</main>
</div>
