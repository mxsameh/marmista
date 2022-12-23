<script lang='ts'>
	import Products from "$lib/stores/products";

</script>

<ul class="products_list">
  {#each $Products as product }
  <a class="product" href={product.link}>
    <img class="product_image" src={product.image} alt="">
    <h3 class="product_name">{product.name}</h3> 
  </a>
  {/each}

</ul>



<style lang='scss'>
  .products_list{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(200px, 1fr));
    padding: 0 24px;
    gap: 48px;
    margin: 80px auto 0;
    max-width: calc( 6 * 200px + 5 * 40px); // 200-> maxImage , 40 -> gap
  }
  .product{
    display: flex;
    flex-direction: column;
    align-items: center;
    &_image{
      max-width: 160px;
      width: 100%;
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 20px;
      // filter: drop-shadow(10px 8px 8px rgba(0,0,0,.3)) brightness(.8);
      filter: brightness(.8);
      transition: scale 150ms ease-in;
    }
    &_name{
      color: var(--gray-500);
      margin-top: 24px;
      text-transform: capitalize;
      font-family: 'Playfair Display';
      font-size: 24px;
      font-weight: normal;
      text-align: center;
      white-space: nowrap;
      // overflow: hidden;
      // text-overflow: ellipsis;
      // width: 100%;
    }
    &:hover &_name{
      color: black;
    }
    &:hover &_image{
      filter: drop-shadow(10px 8px 8px rgba(0,0,0,.3)) brightness(1);
      // filter: brightness(1);
      scale: 1.1;
    }
  }
  @media screen and (max-width: 1023px){
    .product{
      &_image{
        filter: drop-shadow(10px 8px 8px rgba(0,0,0,.3)) brightness(1);
      }
    }
  
  }

  @media screen and (max-width: 767px){
    .products_list{
      gap: 40px;
      margin-top: 56px;
    }
  }
  
</style>