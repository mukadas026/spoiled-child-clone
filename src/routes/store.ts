import { onMount } from 'svelte';
import { readable, writable } from 'svelte/store';

export const showLeftMenu = writable(false);

export const setShowLeftMenu = (prev: boolean) => {
	showLeftMenu.set(!prev);
	return null;
};

export const showSearch = writable(false);

export const setShowSearch = (prev: boolean) => {
	showSearch.set(!prev);
	return null;
};

export const showCart = writable(false)

export const setShowCart = (prev: boolean) => {
    showCart.set(!prev)
}



export const products = readable<Array<IProduct>>([
	// {
	// 	text: 'O36+ Anti-Aging Triple-Peptide Moisturizer',
	// 	src: 'https://www.spoiledchild.com/media/catalog/product/cache/6514bb26b52fa47cd558b8ec0d02ee56/s/k/skin_moisturizer_o36.png'
	// },
	{
		text: 'D35+ ANTI-AGING TRIPLE-PEPTIDE MOISTURIZER',
		src: 'https://www.spoiledchild.com/media/catalog/product/cache/2dc2608017366a491f8a20ee79571e0f/s/k/skin_moisturizer_d35.png'
	},
	{
		text: 'M33 ULTRA STIMULATING HAIR + SCALP SERUM',
		src: 'https://www.spoiledchild.com/media/catalog/product/cache/2dc2608017366a491f8a20ee79571e0f/h/a/hair_serum_m33.png'
	},
	{
		text: 'A22 BIOTIN BOOST HAIR + SCALP SERUM',
		src: 'https://www.spoiledchild.com/media/catalog/product/cache/2dc2608017366a491f8a20ee79571e0f/h/a/hair_serum_a22.png'
	},
	{
		text: 'S24 RAPID RECOVERY HAIR MASK',
		src: 'https://www.spoiledchild.com/media/catalog/product/cache/9952b56247c10df186644a78c7919571/h/a/hair_mask_s24.png'
	},
	{
		text: 'A35 ANTI-AGING GLYCOLIC RENEWING SERUM',
		src: 'https://www.spoiledchild.com/media/catalog/product/cache/2dc2608017366a491f8a20ee79571e0f/s/k/skin_serum_a35_2_1.png'
	},
	{
		text: 'M27 ANTI-AGING GLYCOLIC RENEWING SERUM',
		src: 'https://www.spoiledchild.com/media/catalog/product/cache/2dc2608017366a491f8a20ee79571e0f/s/k/skin_serum_m27_3.png'
	},
	{
		text: 'S34 CLARIFYING PREBIOTIC TREATMENT',
		src: 'https://www.spoiledchild.com/media/catalog/product/cache/2dc2608017366a491f8a20ee79571e0f/s/k/skin_serum_s34.png'
	},
	{
		text: 'S33+ ANTI-AGING COLLAGEN BURST SERUM',
		src: 'https://www.spoiledchild.com/media/catalog/product/cache/2dc2608017366a491f8a20ee79571e0f/s/k/skin_serum_s33.png'
	}
])


export const scrollY = () => {
	const y = writable<string | number>(0)

	const handleScroll = () => {
		y.set(window.scrollY.toFixed(0))
	}
	onMount(() => {
		window.addEventListener("scroll", handleScroll, {passive: true})
		

		return () => window.removeEventListener("scroll", handleScroll)
	})

	return y
}


