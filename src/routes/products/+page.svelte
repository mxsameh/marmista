<svelte:head>
	<title>Products-Marmista</title>
</svelte:head>
<script lang="ts">
	import ProductsList from '$lib/components/products-page/ProductsList.svelte';
</script>

<main class="main">
	<h1 class="title">Our Finest <br /> Marble Production</h1>
	<ProductsList />
</main>

<style lang="scss">
	.main {
		min-height: 100vh;
		padding: 40px;
	}
	.title {
		font-family: 'Playfair Display', serif;
		color: var(--gray-700);
		font-size: clamp(32px, 7.5vw, 80px);
		font-weight: 600;
		text-transform: capitalize;
		line-height: clamp(48px, 9vw, 104px);
		max-width: 850px;
		text-align: center;
		margin: 0 auto;
		padding: 0 16px;
		white-space: nowrap;
	}

	@media screen and (max-width: 1023px) {
		.main {
			padding: 0 0 40px;
			padding-top: calc(var(--header-height) + 24px);
		}
	}

	@media screen and (max-width: 767px) {
		.main {
			padding-top: 40px;
		}
	}
</style>
