<script lang='ts'>
	import HomeGalleryImages from "$lib/stores/HomeGalleryImages";
	import GalleryCol from "./GalleryCol.svelte";

  
	const col1Images = $HomeGalleryImages.images1
	const col2Images = $HomeGalleryImages.images2

</script>

<div class="gallery">
  <GalleryCol images={col1Images} duration={12} colKey={"1"}/>
  <GalleryCol images={col2Images} duration={10} colKey={"2"}/>
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