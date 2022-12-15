<script lang="ts">
	import { page } from '$app/stores';
	import IsMenuOpened from '$lib/stores/menu';
	import { createEventDispatcher, onMount } from 'svelte';
	import SplitType from 'split-type';
	import gsap from 'gsap';

	export let isMenu = false;
  const dispatch  = createEventDispatcher();

	let tabs = [
		{ name: 'Home', link: '/' },
		{ name: 'Products', link: '/products' },
		{ name: 'Gallery', link: '/gallery' },
		{ name: 'Contact', link: '/contact' }
	];

	$: path = $page.route.id;
	$: activeTab = path?.split('/')[1] || 'home';
	$:console.log( activeTab );

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
		const $links = document.querySelectorAll('.isMenu .nav_item') as NodeListOf<HTMLElement>
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

<nav class="nav" class:isMenu>
	{#each tabs as tab}
		<a href={tab.link}
    class="nav_item"
    class:active={activeTab == tab.name.toLocaleLowerCase()}
    on:click={handleClick}>
    {tab.name}
    </a>
	{/each}
</nav>

<style>
	.nav {
		display: flex;
		gap: 32px;
	}
	.isMenu.nav {
		height: 100%;
		flex-direction: column;
		align-items: center;
		gap: 10vh;
		padding-top: calc(var(--header-height) + 30px);
	}
	.isMenu > .nav_item {
		font-size: clamp(32px, 14vw, 80px);
		font-weight: bold;
		color: var(--gray-700);
	}
	.nav_item {
		font-size: 24px;
		color: #555;
		font-kerning: none;
		width: fit-content;
		overflow: hidden;
		display: inline-flex;
	}
	.nav_item:hover {
		color: black;
	}
	.nav_item.active{
		color: black;
	}
</style>
