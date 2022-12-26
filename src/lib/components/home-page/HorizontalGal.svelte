<script lang="ts">
	import HomeGalleryImages from '$lib/stores/HomeGalleryImages';
	import GalleryRow from './GalleryRow.svelte';

	let row1Images = $HomeGalleryImages.images1;
	let row2Images = $HomeGalleryImages.images2;


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
