<script lang="ts">
  import Product from '$lib/components/product-page/Product.svelte';
</script>

<main class="main">
	<div class="product">
		<Product />
	</div>
</main>

<style>
	.product {
		width: 90%;
		margin-left: 10%;
		height: 100vh;
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
			/* margin-top: 16px; */
		}
	}
</style>
