<script>
	import Icon from '@iconify/svelte';
	import { setShowSearch, showSearch } from '../store';
	import PopularSearches from '../components/popularSearches.svelte';
	import Button from '../components/button.svelte';
	import { cloud } from '$lib';
	import ProductButton from '../components/productButton.svelte';
</script>

<div class={`${$showSearch ? 'block' : 'hidden'} z-10 fixed w-screen h-screen bg-black/30`}>
	<div class="h-full overflow-y-auto md:h-4/5 w-full bg-white">
		<div class="w-full h-16 border-b flex">
			<button
				class="w-16 flex items-center justify-center"
				on:click={() => setShowSearch($showSearch)}
			>
				<Icon icon="ei:close" font-size={30} />
			</button>
			<input
				type="text"
				placeholder="Search for products, categories, skins & hair concerns, content"
				class="w-3/5 bg-red-500/0 text-sm font-light outline-none px-4 indent-1"
			/>
		</div>
		<div class="w-full h-20 border-b px-4 py-2">
			<h3 class="font-bold">Popular Searches</h3>
			<div class="w-full flex items-center justify-start gap-x-4 py-2 overflow-x-auto">
				<PopularSearches>Anti-Aging</PopularSearches>
				<PopularSearches>Hair Loss</PopularSearches>
				<PopularSearches>Wrinkles</PopularSearches>
				<PopularSearches>Damaged Hair</PopularSearches>
				<PopularSearches>Brittle Nails</PopularSearches>
			</div>
		</div>

		<div class="flex flex-col lg:flex-row items-center justify-center  lg:gap-x-10 px-4 lg:px-10 py-12 lg:py-4">
			<div class="relative w-[90%] lg:w-1/3 text-center ring-1 px-8 py-8 rounded-md ring-green-500">
				<img
					src={cloud}
					alt=""
					class="absolute top-0 -translate-y-2/3 left-1/2 -translate-x-1/2 bg-white"
				/>
				<div class="space-y-3">
					<h4 class="font-bold text-lg">Find exactly what you need</h4>
					<p class="">
						<b> SpoiledBrain </b>
						will identify the exact products for you based on your needs.
					</p>
					<Button handleClick={() => {}}>Just Ask SpoiledBrain</Button>
				</div>
			</div>
			<div class="w-full py-8 lg:space-y-16 lg:py-4">
				<h3 class="font-bold text-sm">Popular Products</h3>
				<div class="w-full flex flex-wrap gap-y-4 lg:gap-y-0 gap-x-12 lg:gap-x-8 items-center lg:items-start justify-center lg:justify-start p-2">
					<ProductButton
						imageURL="https://www.spoiledchild.com/media/catalog/product/cache/e4a7cb6a2ed07492a5e3b7dfc097c12f/s/k/skin_serum_g25_6.png"
						>G25+ Anti-Aging Retin + Night Rewind Serum</ProductButton
					>
					<ProductButton
						imageURL="https://www.spoiledchild.com/media/catalog/product/cache/e4a7cb6a2ed07492a5e3b7dfc097c12f/s/k/skin_serum_s34.png"
					>
						S34 Clarifying Prebiotic Treatment
					</ProductButton>
					<ProductButton
						imageURL="https://www.spoiledchild.com/media/catalog/product/cache/e4a7cb6a2ed07492a5e3b7dfc097c12f/h/a/hair_serum_a22.png"
					>
						A22 Biotin Boost Hair + Scalp Serum
					</ProductButton>
					<ProductButton
						imageURL="https://www.spoiledchild.com/media/catalog/product/cache/e4a7cb6a2ed07492a5e3b7dfc097c12f/h/a/hair_mask_s24.png"
					>
						S24 Rapid Recovery Hair Mask
					</ProductButton>
				</div>
			</div>
		</div>
	</div>
</div>
