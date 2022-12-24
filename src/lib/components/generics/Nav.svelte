<script lang="ts">
	import IsMenuOpened from '$lib/stores/menu';
	import { createEventDispatcher, onMount } from 'svelte';
	import SplitType from 'split-type';
	import {gsap} from 'gsap';
	import ActiveNavTab from '$lib/stores/activeNavTab';

  const dispatch  = createEventDispatcher();

	let tabs = [
		{ name: 'Home', link: '/' },
		{ name: 'Products', link: '/products' },
		{ name: 'Gallery', link: '/gallery' },
		{ name: 'Contact', link: '/contact' }
	];

  $:activeLink =  $ActiveNavTab

  const handleClick = () =>
  {
    dispatch('linkClick')
  }

	let revealAnimTl = gsap.timeline({paused:true})
	let hideAnimTl = gsap.timeline({paused:true})

	$:{
		if($IsMenuOpened) revealAnimTl.play(0)
		if(!$IsMenuOpened) hideAnimTl.play(0)
	}

	onMount(()=>
	{
		const $links = document.querySelectorAll('.menu .nav_item') as NodeListOf<HTMLElement>
		$links.forEach(link =>
		{
			SplitType.create(link,{types: 'chars'})
		})

		revealAnimTl.to('.nav_item .char',{
			delay: .2,
			y: 0,
			stagger: {amount: 1},
		})

		hideAnimTl.set('.nav_item .char',
		{
			y: 100,
		})

	})


</script>

<nav class="nav">
	{#each tabs as tab}
		<a href={tab.link}
    class="nav_item"
    class:active={activeLink == tab.name.toLocaleLowerCase()}
    on:click={handleClick}>
    {tab.name}
    </a>
	{/each}
</nav>

<style lang="scss">
	.nav {
		display: flex;
		flex-direction: column;
		gap: 32px;
		height: 100%;
		align-items: center;
		gap: 10vh;
		padding-top: calc(var(--header-height) + 30px);
	}

	.nav_item {
		color: var(--gray-500);
		font-size: clamp(32px, 14vw, 80px);
		font-kerning: none;
		width: fit-content;
		overflow: hidden;
		display: inline-flex;
		font-family: 'Playfair Display', serif;
		font-weight: 500;
		position: relative;
	}
	.nav_item:hover {
		color: black;
	}
	.nav_item.active{
		color: black;
	}
</style>
