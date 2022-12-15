<script lang='ts'>
	import ProductImage from "./ProductImage.svelte";
	import ProductInfo from "./ProductInfo.svelte";



  let product = {
    img : '/product1.png',
    name : 'silver river grey marble',
    details : 'Lorem ipsum dolor sit amet consectetur at elementum ornare arcu maecenas vitae. Ultricies eget volutpat purus vitae. Suspendisse '
  }
  
</script>

<div class="product">

  <ProductInfo name={product.name} details={product.details} />
  <ProductImage image={product.img}/>

</div>

<style>
  :root{
    --border-radius: 40px
  }
  .product{
    background-color:var(--gray-100) ;
    display: flex;
    width: 100%;
    height: 100%;
    gap: 60px;
    justify-content: space-between;
    border-radius: var(--border-radius) 0 0 var(--border-radius);
  }


  @media screen and (max-width: 767px)
  {
    .product{
      flex-direction: column;
      border-radius: var(--border-radius) var(--border-radius) 0 0;
      gap: 40px;
    }
  }
  
</style>