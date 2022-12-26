<script lang='ts'>
	import { createVerticalGal } from "$lib/utils/verticalGallery";
	import { onMount } from "svelte";


  export let images : string[];
  export let duration : number;
  export let colKey : string;

	const imagesLength = images.length;
	const imageDimen = 120;
	const gap = 42;
	const imageHeight = imageDimen + gap;

  onMount(()=>
  {
    createVerticalGal(imageHeight, imagesLength, colKey, duration)
  })

 
</script>


<div data-col={colKey} class="gallery_col" style:width={imageDimen+'px'}>
  {#each images as image}
  <img class="image" src={image} alt="" style:width={imageDimen+'px'}>
  {/each}
</div>



<style lang='scss'>
  
  .gallery_col{
    position: relative;
    height: 100%
  }
  .image{
    position: absolute;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 16px;
    filter: drop-shadow(-4px 8px 10px rgba(0,0,0,.3));
    background-color: var(--gray-200);
  }
</style>