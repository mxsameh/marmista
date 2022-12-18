<script lang='ts'>
	import NextBtn from "./NextBtn.svelte";
  export let image : string
  export let nextProduct : string
</script>


  <div class="product_image" style:background-image={`url(${image})`}>
    <div class="nextBtn">
      <NextBtn link={nextProduct}/>
    </div>
  </div>

<style>
  .product_image{
    border-radius: var(--border-radius) 0 0 var(--border-radius);
    background-position: top left;
    background-repeat: no-repeat;
    background-size: cover;
    flex-basis: 55%;
    /* max-width: 700px; */
    position: relative;
  }

  .nextBtn{
    position: absolute;
    bottom: 40px;
    left: 40px;
  }

  @media screen and (max-width: 767px)
  {
    .product_image{
      border-radius: var(--border-radius) var(--border-radius) 0 0;
      flex-basis: 60%;
    }
    .nextBtn{
      left: 50%;
      translate: -50%;
    }
  }
  
</style>