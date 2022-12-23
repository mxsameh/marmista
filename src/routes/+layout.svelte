<script lang='ts'>
	import { page } from '$app/stores';
	import Header from '$lib/components/generics/Header.svelte';
	import ActiveNavTab from '$lib/stores/activeNavTab';
	import ScreenSize from '$lib/stores/screenSize';
  import '$lib/styles/styles.css'
	import { onMount } from 'svelte';

	$:activeTab = $page.route.id?.replaceAll('/', ' ').trim().split(' ')[0] || 'home'

	$:{
		ActiveNavTab.set(activeTab)
	}
	onMount(()=>{
		handleResize()
	})

	const handleResize = () => {
		if (window.innerWidth > 1024) {
			ScreenSize.set('l')
		} else if (window.innerWidth > 767) {
			ScreenSize.set('m')
		} else {
			ScreenSize.set('s')
		}
	};

</script>

<svelte:window on:resize={handleResize}/>

<Header />

<div class="page-content">
	<slot />
</div>



<style lang="scss">
	.page-content{
		min-height: 100vh;
		width: calc(100vw - var(--header-width));
		margin-left: auto;
	}

	@media screen and (max-width: 1023px){
		.page-content{
			width: 100%;
		}
	}
	@media screen and (max-width: 767px){
		.page-content{
			padding-top: var(--header-height);
		}
	}
</style>