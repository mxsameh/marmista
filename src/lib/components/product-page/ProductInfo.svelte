<script lang="ts">
	export let name: string;
	export let details: string;
</script>

<div class="product_info">
  <div class="product_content">
    <h1 class="product_title">{name} marble</h1>
    <p class="product_details">{details}</p>
  </div>
</div>

<style>
  .product_info{
    width: 100%;
    height: 100%;
    background-color:var(--gray-100);
    border-radius: var(--border-radius) 0 0 var(--border-radius);
  }
  .product_content{
    width: calc( 45% - 30px);
    height: 100%;
    padding-top: var(--header-height);
    padding-left: 40px;
    padding-bottom: 64px;
    display: flex;
    flex-direction: column;
  }

  .product_title{
    /* font-size: 80px; */
    font-size: clamp(60px,6vw,120px);
    text-transform: capitalize;
  }
  .product_details{
    max-width: 400px;
    font-size: 20px;
    line-height: 1.2;
    margin-top: auto;
    color: var(--gray-700);
  }

  @media screen and (max-width: 767px)
  {
    .product_info{
      border-radius: var(--border-radius) var(--border-radius) 0 0;
    }
    .product_content{
      padding: 0 16px 0;
      width: 100%;
      height: 40%;
    }
    .product_title{
      font-size: 48px;
      margin-top: 32px;
      margin-bottom: 32px;
      text-align: center;
    }
    .product_details{
      font-size: 16px;
      margin-bottom: 24px;
      margin-top: unset;
      text-align: center;
    }
  }
</style>
