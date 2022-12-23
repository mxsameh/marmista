<script lang="ts">
	import GalleryRow from './GalleryRow.svelte';
	const row1Images = [
		'/product1.png',
		'/lilack.webp',
		'/marmara.webp',
		'/product1.png',
		'/marmara.webp',
		'/lilack.webp',
		'/product2.jpg',
		'/lilack.webp',
		'/product2.jpg'
	];
	const row2Images = [
		'/lilack.webp',
		'/marmara.webp',
		'/product1.png',
		'/lilack.webp',
		'/marmara.webp',
		'/product2.jpg',
		'/lilack.webp',
		'/product1.png',
		'/product2.jpg'
	];


</script>

<div class="gallery">
	<GalleryRow images={row1Images} duration={10} rowKey={"1"}/>
	<GalleryRow images={row2Images} duration={12} rowKey={"2"}/>
</div>

<style lang="scss">
	.gallery {
		overflow: hidden;
		width: 100%;
		margin-top: 56px;
		display: none;
		flex-direction: column;
		gap: 32px;
	}
	@media screen and (max-width: 767px){
		.gallery{
			display: flex;
		}	
	}
</style>
