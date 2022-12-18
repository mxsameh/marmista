<script lang="ts">
  import ProductImage from '$lib/components/product-page/ProductImage.svelte';
  import ProductInfo from '$lib/components/product-page/ProductInfo.svelte';
	import gsap from 'gsap'
	import { onMount } from 'svelte';

	export let data : any;

	let product : any;

	let firstLoad = true;

	// const next = () =>
	// {
	// 	if(firstLoad) return
	// 	console.log( 'next' );
	// 	const tl = gsap.timeline()
	// 	tl
	// 	.to('.product_info',{
	// 		y : '35%',
	// 		duration : 1,
	// 		onComplete:()=>{
	// 			// change product
	// 			product = data.product
	// 		}
	// 	})
	// 	.to('.product_info',{
	// 		y: 0,
	// 		duration: 1
	// 	})

	// }
	let screenSize : string;
	const handleResize = () =>
	{
		if(window.innerWidth > 1024)
		{
			screenSize = 'l'
		}else if(window.innerWidth > 767)
		{
			screenSize = 'm'
		}else
		{
			screenSize = 's'
		}
	}

	onMount(()=>{
		product = data.product
		firstLoad = false
	 	handleResize()
		window.addEventListener('resize',handleResize)
	})



	$:{
		const runAnimation = (screenSize : string) =>
		{
			if(firstLoad) return
			console.log( 'anim' );
			if(screenSize == 'l'){
				const tlLargeScreen = gsap.timeline()
				tlLargeScreen
				.to('.product_info',{
					x : '45%',
					duration : 1,
				})
				.to('.product_content',{
					opacity : 0,
					duration : .3,
					onComplete:()=>{
						// change product
						product = data.product
						const image = document.querySelector('.product_image')
						tlLargeScreen.reverse()
					}
				})
			}else{
				const tlSmallScreen = gsap.timeline()
				tlSmallScreen
				.to('.product_info',{
					y : '38%',
					duration : 1,
				})
				.to('.product_content',{
					opacity : 0,
					duration : .3,
					onComplete:()=>{
						// change product
						product = data.product
						const image = document.querySelector('.product_image')
						tlSmallScreen.reverse()
					}
				})
			}
		}
		runAnimation(screenSize)
	}

</script>

<main class="main">
	{#if product }
	<div class="product">
		<ProductInfo name={product.name} details={product.details} /> 
		<ProductImage image={product.image} nextProduct={data.nextProductLink}/>
	</div>
	{/if}
</main>

<style>
  :root{
    --border-radius: 40px
  }
	.main{
    width: 90%;
		height: 100vh;
		margin-left: 10%;
		overflow: hidden;
	}
	.product {
    height: 100%;
		width: 100%;
		position: relative;
	}
	@media screen and (max-width: 767px) {
		.main {
			width: 100%;
			margin-left: 0;
			padding-top: calc( var(--header-height) + 16px );
		}
		.product {
			width: 100%;
      height: 100%;
      gap: 40px;
		}
	}

  
</style>
