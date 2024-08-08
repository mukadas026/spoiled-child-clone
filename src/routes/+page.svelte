<script>
	import Hero from './sections/hero.svelte';
	import Products from './sections/products.svelte';
	import LiquidCollagen from './sections/liquidCollagen.svelte';
</script>

<div class="space-y-32 py-16">
	<div class="space-y-[720px] relative hero-cont">
		<Hero />
		<Products />
	</div>
	<LiquidCollagen />
</div>

<style>
	.hero-cont {
		scroll-timeline: --hcont block;
	}
</style>