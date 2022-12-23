<script lang="ts">
	import ProductImage from '$lib/components/product-page/ProductImage.svelte';
	import ProductInfo from '$lib/components/product-page/ProductInfo.svelte';
	import ScreenSize from '$lib/stores/screenSize';
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	export let data: any;
	$: links = data.productLinks;
	$: screenSize = $ScreenSize;

	let product: any;

	let firstLoad = false;

	onMount(() => {
		product = data.product;
		// firstLoad = false
	});

	const smallScreenTl = gsap.timeline({ paused: true });
	let newProduct: any;

	let largeScreenTl = gsap.timeline({ paused: true });

	const setTls = () => {
		// LARGE SCREEN TL
		largeScreenTl
			.to('.product_info', {
				x: '65%',
				duration: 1
			})
			.set('.product_content', {
				opacity: 0,
				onComplete: () => {
					product = newProduct;
					largeScreenTl.reverse();
				}
			});

		// SMALL SCREEN TL
		smallScreenTl
			.to('.product_info', {
				y: '38%',
				duration: 1
			})
			.set('.product_content', {
				opacity: 0,
				onComplete: () => {
					product = newProduct;
					smallScreenTl.reverse()
				}
			});
	};

	const runAnimation = () => {
		// if first load is true or product is not defined will return
		if (firstLoad || !product) return;

		setTls();

		if (screenSize == 'l') {
			largeScreenTl.play();
		} else smallScreenTl.play(0);
	};

	$: {
		newProduct = data.product;
		runAnimation();
	}

</script>

<main class="main">
	{#if product}
		<div class="product">
			<ProductInfo name={product.name} details={product.details} productLinks={links} />
			<ProductImage image={product.image} {links} />
		</div>
	{/if}
</main>

<style>
	:root {
		--border-radius: 40px;
	}
	.main {
		height: 100vh;
		overflow: hidden;
		margin-left: 40px;
	}
	.product {
		height: 100%;
		width: 100%;
		position: relative;
	}

	@media screen and (max-width: 1023px) {
		.main {
			margin-left: 0;
		}
	}
	@media screen and (max-width: 767px) {
		.main {
			width: 100%;
			height: calc(100vh - var(--header-height));
			margin-left: 0;
			padding-top: 16px;
		}
		.product {
			width: 100%;
			height: 100%;
			gap: 40px;
		}
	}
</style>
