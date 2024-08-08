<script lang="ts">
	import { cloudWhite } from '$lib';
	import { onMount } from 'svelte';
	import Button from '../components/button.svelte';
	import { products, scrollY } from '../store';

	// const y = scrollY();
	// $: console.log($y);
	let int = 0;
	setInterval(() => {
		if (int < $products.length - 1) {
			int += 1;
			if (int === 3) {
				int += 1;
			}
		} else {
			int = 0;
		}
	}, 2000);

	onMount(() => {
		// @ts-ignore
		const t1 = new ViewTimeline({
			// source: document.documentElement,
			subject: document.querySelector('.hero-cont'),
			axis: 'y'
		});
		// console.log(t1);

		const imgCont = document.querySelector<HTMLDivElement>('.img-cont');
		const imgContAnim = imgCont?.animate(
			{
				transform: ['translate(-100px, -600px)', 'translate(-420px, 1500px)']
			},
			{
				timeline: t1,

				// rangeStart: 'entry 25%',
				// @ts-ignore
				rangeEnd: 'cover 80%'
			}
		);
		// a1?.addEventListener("")
		const img = document.querySelector<HTMLImageElement>('.img-cont img');

		const imgAnim = img?.animate(
			{
				transform: ['rotatez(60deg) scale(2.2)', 'rotatez(-3deg) scale(0.9)']
			},
			{
				timeline: t1,
				// rangeStart: 'entry 25%',
				// @ts-ignore
				rangeEnd: 'cover 80%'
			}
		);
		// img.addEventListener('', () => {
		// 	console.log('animating');
		// });
		const imgSubCont = document.querySelector<HTMLDivElement>('.img-cont > div');
		const productsCont = document.querySelector<HTMLDivElement>('.products-cont');
		window.addEventListener('scroll', () => {
			const imgSubContRect = imgSubCont?.getBoundingClientRect();

			const productsContRect = productsCont?.getBoundingClientRect();

			// console.log(imgTop, imgLeft)
			// if (imgSubContRect && productsContRect) {
			// 	if (imgSubContRect.top > productsContRect.top) {
			// 		imgContAnim?.pause();
			// 		imgAnim?.pause();
			// 	} else {
			// 		// imgContAnim?.play();
			// 		// imgAnim?.play();
			// 	}
			// }
			if (imgContAnim?.timeline?.currentTime?.value) {
				// @ts-ignore
				if (imgContAnim.timeline.currentTime.value > 77) {
					imgContAnim.pause();
					imgAnim?.pause();
					img.style.opacity = "0"
					imgCont.style.opacity = "0"
					} else {
						imgContAnim.play();
						imgAnim?.play();
						imgCont.style.opacity = "1"
						img.style.opacity = "1"
				}
				console.log(imgAnim?.timeline);
			}
		});
	});
</script>

<section class="relative -z-10 px-4 md:px-12 lg:px-60 py-2 flex justify-between items-center">
	<div class="w-4/5 md:w-3/4 lg:w-3/5 space-y-4 pt-16">
		<p class="font-black text-5xl md:text-[250px] font-media">AGE IS AN OLD IDEA</p>
		<p class="text-md md:text-2xl max-w-sm">
			Intelligent skin and hair products that refuse to take aging seriously.
		</p>
		<p class="text-md md:text-2xl font-bold">Find out exactly what you need.</p>
		<div class="w-4/5 md:w-2/5">
			<Button handleClick={() => {}}>
				<span class="flex items-center justify-center gap-x-4">
					<img src={cloudWhite} alt="" class="max-w-10" />
					<span class="inline"> Ask SpoiledBrain </span>
				</span>
			</Button>
		</div>
	</div>
	<div class={`absolute z-10 right-48 transition-all bg-red-500/0 img-cont`}>
		<div class="bg-blue-500/0">
			<img src={$products[int].src} alt="" class={``} />
		</div>
	</div>
</section>

<style>
	/* .img-cont {
		animation: img auto linear;
		animation-timeline: scroll(nearest y);

	}

	@keyframes img {
		from {
			top: 10px;
		}
		to {
			top: 1500px;
		}
	} */
</style>
