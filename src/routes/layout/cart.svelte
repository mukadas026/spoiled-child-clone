<script>
	import Icon from '@iconify/svelte';
	import { setShowCart, showCart } from '../store';
	import Button from '../components/button.svelte';
</script>

<div class={`w-screen h-screen fixed z-10 bg-black/30 ${$showCart ? 'block' : 'hidden'}`}>
	<aside class="absolute z-10 right-0 w-full max-w-[400px] h-full bg-white">
		<div class="w-full h-16 flex items-center justify-between px-4 border-b">
			<h3 class="text-xl font-bold">Your Bag</h3>
			<button on:click={() => setShowCart($showCart)}>
				<Icon icon="ic:round-close" font-size={30} />
			</button>
		</div>

		<div class="py-4 px-4 w-full h-3/4 border-b">
			<p class="text-center text-5xl font-bold tracking font-media">
				THIS EMPTY BAG IS GETTING OLD.
			</p>
            <div></div>
		</div>

		<div class="px-4 space-y-4 py-4">
			<div class="flex items-center justify-between">
				<p class="font-bold text-lg">Estimated Total</p>
				<button> <Icon icon="pepicons-pop:line-x" /> </button>
			</div>
			<Button handleClick={() => {}}>CHECKOUT</Button>
		</div>
	</aside>
</div>
