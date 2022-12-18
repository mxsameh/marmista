<script lang="ts">
	export let name: string;
	export let details: string;
</script>

<div class="product_info">
	<h1 class="product_title">{name} marble</h1>
	<p class="product_details">{details}</p>
</div>

<style>
  .product_info{
    flex-basis: 45%;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: var(--header-height);
    padding-left: 40px;
    padding-bottom: 64px;
  }

  .product_title{
    font-size: 80px;
    text-transform: capitalize;
  }
  .product_details{
    font-size: 24px;
    line-height: 1.2;
    margin-top: auto;
    color: var(--gray-700);
    text-align: justify;
  }

  @media screen and (max-width: 767px)
  {
    .product_info{
      padding: 0 16px 0;
      flex-basis: 40%;
    }
    .product_title{
      font-size: 48px;
      margin-top: 32px;
    }
    .product_details{
      font-size: 18px;
      text-align: unset;
    }
  }
</style>
