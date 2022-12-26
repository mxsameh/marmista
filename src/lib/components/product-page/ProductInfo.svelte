<script lang="ts">
	import ScreenSize from '$lib/stores/screenSize';
	import NavBtns from './NavBtns.svelte';
	export let name: string;
	export let productLinks: string;

	$: screenSize = $ScreenSize;
</script>

<div class="product_info">
	<div class="product_content">
		<h1 class="product_title">{name} marble</h1>
			<div class="product_btns">
				<NavBtns {productLinks} />
			</div>
	</div>
</div>

<style>
	.product_info {
		width: 100%;
		height: 100%;
		background-color: var(--gray-100);
		border-radius: var(--border-radius) 0 0 var(--border-radius);
	}
	.product_content {
		width: calc(50% - 30px);
		height: 100%;
		padding-top: var(--header-height);
		/* padding-left: 40px; */
		padding-left: 56px;
		padding-bottom: 40px;
		display: flex;
		flex-direction: column;
	}

	.product_title {
		font-family: 'Playfair Display';
		font-size: clamp(60px, 6vw, 120px);
		text-transform: capitalize;
		font-weight: 500;
	}

	.product_btns {
		width: fit-content;
		margin: auto auto 0;
	}

	@media screen and (max-width: 1023px) {
		.product_content {
			width: calc(45%);
			padding-left: 40px;
		}
	}

	@media screen and (max-width: 767px) {
		.product_info {
			border-radius: var(--border-radius) var(--border-radius) 0 0;
		}
		.product_content {
			padding: 32px 0 24px;
			width: 100%;
			height: 40%;
			align-items: center;
		}
		.product_title {
			font-size: 48px;
			margin-bottom: 24px;
			text-align: center;
		}
	}
</style>
