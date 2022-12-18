<script lang="ts">
  import ProductImage from '$lib/components/product-page/ProductImage.svelte';
  import ProductInfo from '$lib/components/product-page/ProductInfo.svelte';

	export let data : any;
	$:product = data.product;
	$:productImage = product.image;
	$:productName = product.name;
	$:productDetails = product.details
	$:nextProduct = data.nextProductLink


	$:console.log( nextProduct );

</script>

<main class="main">
	<div class="product">
		<ProductInfo name={productName} details={productDetails} /> 
		<ProductImage image={productImage} nextProduct={nextProduct}/>
	</div>
</main>

<style>
  :root{
    --border-radius: 40px
  }
	.main{
		width: 100vw;
		height: 100vh;
	}
	.product {
		margin-left: 10%;
    background-color:var(--gray-100) ;
    display: flex;
    width: 90%;
    height: 100%;
    gap: 60px;
    justify-content: space-between;
    border-radius: var(--border-radius) 0 0 var(--border-radius);
	}
	@media screen and (max-width: 767px) {
		.main {
			padding-top: calc( var(--header-height) + 16px );
      height: 100vh;
		}
		.product {
			width: 100%;
      height: 100%;
			margin-left: 0;
      flex-direction: column;
      border-radius: var(--border-radius) var(--border-radius) 0 0;
      gap: 40px;
		}
	}

  
</style>
