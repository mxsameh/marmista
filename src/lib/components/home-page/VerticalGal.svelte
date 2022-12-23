<script lang='ts'>
	import GalleryCol from "./GalleryCol.svelte";

  
	const col1Images = [
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
	const col2Images = [
		'/lilack.webp',
		'/marmara.webp',
		'/product1.png',
		'/marmara.webp',
		'/product2.jpg',
		'/lilack.webp',
		'/product1.png',
		'/product2.jpg'
	];

</script>

<div class="gallery">
  <GalleryCol images={col1Images} duration={12} colKey={"1"}/>
  <GalleryCol images={col1Images} duration={10} colKey={"2"}/>
</div>



<style lang='scss'>
  .gallery{
    overflow: hidden;
    height: 100vh;
    display: flex;
    gap: 40px;
    padding: 0 16px;
  }
  @media screen and (max-width: 767px){
    .gallery{
      display: none;
    }
  }

</style>