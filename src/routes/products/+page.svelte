<script lang='ts'>
	import ProductsList from "$lib/components/products-page/ProductsList.svelte";

  
</script>

<main class="main">
  <h1 class="title">Our Finest Marble Production</h1>
  <ProductsList/>
</main>

<style lang='scss'>
  .main{
    min-height: 100vh;
    padding: 40px;
  }
  .title{
    font-family: 'Playfair Display', serif;
    color: var(--gray-800);
    font-size: clamp(40px,7vw,80px);
    text-align: center;
    font-weight: 600;
    text-transform: capitalize;
    line-height: clamp(48px, 9vw, 104px);
  }

  @media screen and (max-width: 1023px){
    .main{
      padding-top: calc( var(--header-height) + 24px)
    }
  }

  @media screen and (max-width: 767px){
  .main{
    padding-top: 40px
  }
  }
  
</style>