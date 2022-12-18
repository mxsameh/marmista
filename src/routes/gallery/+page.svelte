<script lang='ts'>
	import Gallery from "$lib/components/gallery/Gallery.svelte";
  import GalleryStore from "$lib/stores/gallery";

  const images = $GalleryStore.images
  const dimens = $GalleryStore.dimens

</script>


<main class="main">
  <Gallery {images} {dimens} />
</main>

<style lang="scss">
  .main{
    width: 90%;
    margin-left: 10%;
    background-color: var(--gray-100);
    border-radius: 24px 0 0 24px;
    overflow: hidden;
  }
  
</style>