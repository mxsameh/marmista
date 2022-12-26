<svelte:head>
	<title>Gallery-Marmista</title>
</svelte:head>
<script lang='ts'>
	import Gallery from "$lib/components/gallery/Gallery.svelte";
  import GalleryStore from "$lib/stores/GalleryStore";

  const images = $GalleryStore.images
  const dimens = $GalleryStore.dimens
</script>

<main class="main">
  <Gallery {images} {dimens} />
</main>

<style lang="scss">
  .main{
    width: 100%;
    border-radius: 24px 0 0 24px;
    overflow: hidden;
    padding: 24px 16px;
  }

  @media screen and (max-width: 1023px){
    .main{
      padding: 0 32px;
      padding-top: calc(var(--header-height));
      padding-bottom: 24px;
    }
  }

  @media screen and (max-width: 767px){
    .main{
      padding: 0 24px 24px;
    }
  }
  
</style>