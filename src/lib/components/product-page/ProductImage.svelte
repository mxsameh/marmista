<script lang='ts'>
  export let image : string
</script>


  <div class="product_image" style:background-image={`url(${image})`}>
  </div>

<style>
  .product_image{
    width: calc( 55% - 30px);
    height: 100vh;
    position: absolute;
    right: 0;
    top: 0;
    border-radius: var(--border-radius) 0 0 var(--border-radius);
    background-position: top left;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.5);
    max-width: 650px;
  }

  @media screen and (max-width: 767px)
  {
    .product_image{
      left: 0;
      width: 100%;
      top: unset;
      bottom: 0;
      border-radius: var(--border-radius) var(--border-radius) 0 0;
      height: 60%;
      box-shadow: 0px -4px 16px rgba(0, 0, 0, 0.5);
      max-width: unset;
      display: flex;
    }
  }
  
</style>