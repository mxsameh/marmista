<script lang="ts">
	import HomeContent from '$lib/components/home-page/HomeContent.svelte';
	import VerticalGal from '$lib/components/home-page/VerticalGal.svelte';
	import ScreenSize from '$lib/stores/screenSize';

	$:screenSize = $ScreenSize
</script>

<main class="main section">
	<section class="content">
		<h1 class="content_title">add luxury to <br /> your projects</h1>
		<HomeContent />
	</section>

	{#if screenSize != 's'}
		<VerticalGal />
	{/if}
</main>

<style lang="scss">
	.main {
		display: flex;
		gap: 60px;
		padding: 0 24px;
		height: 100vh;
	}

	.content {
		flex-basis: 60%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 40px 0 40px;
		&_title {
			font-size: clamp(48px, 6vw, 120px);
			font-family: 'Playfair Display', serif;
			text-align: center;
			text-transform: capitalize;
			font-weight: 600;
			color: var(--gray-800);
		}
	}
	@media screen and (max-width: 1023px){
		.main{
			min-height: calc(100vh - var(--header-height));
		}
		.content{
			padding-top: calc( var(--header-height) + 40px);
				
		}
	
	}
	@media screen and (max-width: 767px) {
		.main {
			display: block;
			gap: unset;
			margin: 0;
			padding: 0;
			padding-top: var(--header-height);
		}
    .content{
			padding-top: 24px;
      &_title{
        font-size: clamp(44px, 10vw, 100px);
      }
    }
	}
</style>
