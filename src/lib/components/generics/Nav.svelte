<script lang="ts">
	import { page } from '$app/stores';
	import { createEventDispatcher } from 'svelte';

	export let isMenu = false;
  const dispatch  = createEventDispatcher();

	let tabs = [
		{ name: 'home', link: '/' },
		{ name: 'products', link: '/products' },
		{ name: 'gallery', link: '/gallery' },
		{ name: 'contact', link: '/contact' }
	];

	$: path = $page.route.id;
	$: activeTab = path?.split('/')[1] || 'home';

  const handleClick = () =>
  {
    dispatch('linkClick')
  }

</script>

<nav class="nav" class:isMenu>
	{#each tabs as tab}
		<a href={tab.link}
    class="nav_item"
    class:active={activeTab == tab.name}
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
		/* color: white; */
		color: #555;
		text-transform: capitalize;
		width: fit-content;
	}
	.nav_item:hover {
		color: black;
	}
	.active {
		position: relative;
	}
	.active::after {
		content: '';
		width: 120%;
		height: 4px;
		background-color: #333;
		position: absolute;
		translate: -50% 0;
		top: 50%;
		left: 50%;
	}
  .isMenu>.active::after{
		content: '';
		width: 120%;
		height: clamp(4px,1.5vw,10px);

  }
</style>
