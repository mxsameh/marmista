<script lang='ts'>
	import { createHorizontalGallery } from "$lib/utils/horizontalGallery";
	import { onMount } from "svelte";

  export let images : string[];
  export let duration : number;
  export let rowKey : string;

	const imagesLength = images.length;
	const imageDimen = 100;
	const gap = 32;
	const imageWidth = imageDimen + gap;

  onMount(() =>
  {
    createHorizontalGallery(imageWidth, imagesLength, rowKey, duration)
  })
</script>

<div data-row={rowKey} class="gallery_row" style:height={`${imageDimen + 20}px`}>
  {#each images as image }
		<img class="image" src={image} alt="" style:width={imageDimen + 'px'} />
  {/each}
</div>


<style lang='scss'>
  .gallery_row{
    position: relative;
    width: 100%;
    // &:first-of-type{
    //   margin-bottom: 32px;
    // }
  }
	.image {
		aspect-ratio: 1;
		object-fit: cover;
		position: absolute;
    border-radius: 16px;
    filter: drop-shadow(10px 8px 8px rgba(0,0,0,.3));
    background-color: var(--gray-200);
	}
  
</style>