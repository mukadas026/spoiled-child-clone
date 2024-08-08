<script>
	import { cloud, logo } from '$lib';
	import Icon from '@iconify/svelte';
	import { setShowLeftMenu, showLeftMenu } from '../store';
	import Button from '../components/button.svelte';
	import LeftMenuButton from '../components/leftMenuButton.svelte';
	import Accordion from '../components/accordion.svelte';
</script>

<!-- on:click={() => setShowLeftMenu($showLeftMenu)} -->
<div
	class={`fixed z-10 top-0 left-0 w-screen h-screen bg-black/50 ${$showLeftMenu ? 'block' : 'hidden'}`}
>
	<aside
		class={`overflow-y-auto absolute left-0 top-0 z-10 bg-white  w-full md:max-w-[350px] h-screen ${$showLeftMenu ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}
	>
		<div class="sticky top-0 bg-white z-10 flex items-center w-full px-4 border-b">
			<button on:click={() => setShowLeftMenu($showLeftMenu)}>
				<Icon icon="ic:round-close" font-size={30} />
			</button>
			<a href="/" class="">
				<img src={logo} alt="" class="scale-50 bg-white/0" />
			</a>
		</div>
		<div class="flex flex-col py-0 shadow-md">
			<div class="px-4 flex flex-col gap-y-4 py-4">
				<div class="flex gap-x-8">
					<div class="w-3/4">
						<h4 class="font-bold">Not sure what you need?</h4>
						<p class="text-sm">
							Let <b> SpoiledBrain </b>
							find your perfect hair and skin products.
						</p>
					</div>
					<div class="w-1/3 flex items-center justify-center">
						<img src={cloud} alt="" class="scale-[1.25] bg-white/0" />
					</div>
				</div>
				<Button handleClick={() => {}}>Ask SpoiledBrain</Button>
			</div>
		</div>
		<nav class="px-4 py-4">
			<div class="flex flex-col gap-y-4">
				<LeftMenuButton
					rotate={1}
					href="/"
					imageURL="https://www.spoiledchild.com/media/catalog/category/hair-min_1.png"
				>
					<span> Shop Hair </span>
				</LeftMenuButton>
				<LeftMenuButton
					rotate={1}
					href="/"
					imageURL="https://www.spoiledchild.com/media/catalog/category/skin-min_1.png"
				>
					<span> Shop Skin </span>
				</LeftMenuButton>
				<LeftMenuButton
					rotate={2}
					href="/"
					imageURL="https://www.spoiledchild.com/static/version1722327433/frontend/SpoiledChild/default/en_US/images/shop-e27.png"
				>
					<span> Shop </span>
					<span class="text-orang"> E27 Magic Collagen </span>
				</LeftMenuButton>
				<LeftMenuButton
					rotate={2}
					href="/"
					imageURL="https://www.spoiledchild.com/static/version1722327433/frontend/SpoiledChild/default/en_US/images/i34_spoon_menu.png"
				>
					<span> Shop </span>
					<span class="text-blue-500"> I34 Hair Growth Liquid</span>
				</LeftMenuButton>
				<LeftMenuButton
					rotate={3}
					href="/"
					imageURL="https://www.spoiledchild.com/static/version1722327433/frontend/SpoiledChild/default/en_US/images/shop-all.png"
				>
					<span> Shop All</span>
					<!-- <span class="text-blue-500"> I34 Hair Growth Liquid</span> -->
				</LeftMenuButton>
			</div>
		</nav>
		<div class="px-4 py-8">
			<Accordion text="Shop by Hair Concern">
				<div class=" flex text-left gap-x-16">
					<div class="text-gray-600 flex flex-col gap-y-8">
						<a href="/">Strength</a><a href="/">Damage</a><a href="/">Frizz</a>
					</div>
					<div class="text-gray-600 flex flex-col gap-y-8">
						<a href="/">Thinning</a><a href="/">Dullness</a><a href="/">Split Ends</a>
					</div>
				</div>
			</Accordion>

			<Accordion text="Shop by Skin Concern">
				<div class=" flex text-left gap-x-16">
					<div class="text-gray-600 flex flex-col gap-y-8">
						<a href="/">Breakouts</a><a href="/">Clogged Pores</a><a href="/">Dullness</a>
					</div>
					<div class="text-gray-600 flex flex-col gap-y-8">
						<a href="/">Wrinkles</a><a href="/">Firmness</a><a href="/">Hyperpigmentation</a>
					</div>
				</div>
			</Accordion>
			<Accordion text="Get Help">
				<div class=" flex text-left">
					<div class="text-gray-600 flex flex-col items-start gap-y-8">
						<a href="/">FAQs</a><a href="/">Manage or Cancel Subscription</a><a href="/"
							>Exchange or Return</a
						><a href="/">Contact Us</a>
					</div>
					<!-- <div class="text-gray-600 flex flex-col gap-y-8">
						<a href="/">Wrinkles</a><a href="/">Firmness</a><a href="/">Hyperpigmentation</a>
					</div> -->
				</div>
			</Accordion>
		</div>
	</aside>
</div>
