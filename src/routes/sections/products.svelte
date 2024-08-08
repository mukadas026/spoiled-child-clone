<script>
	import { cloudWhite } from "$lib";
	import Button from "../components/button.svelte";
	import { products } from "../store";

</script>
<section class="px-2 md:px-12 lg:px-32 py-2 w-full space-y-4">
    <h3 class="text-center font-bold text-xl">A complete spectrum of best in class products for personalized age-control.</h3>
    <div class="w-full bg-red-500/0 overflow-x-auto">
        <div class="w-max flex items-center gap-x-8 products-cont">
            {#each $products as product}
                <div class="">
                    <img src={product.src} alt="">
                </div>
            {/each}
        </div>
    </div>
    <div class="w-4/5 md:w-2/5 mx-auto">
        <Button handleClick={() => {}}>
            <span class="flex items-center justify-center gap-x-4">
                <img src={cloudWhite} alt="" class="max-w-10" />
                <span class="inline"> Ask SpoiledBrain </span>
            </span>
        </Button>
    </div>
</section>