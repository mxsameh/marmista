<script lang='ts'>
	import { goto } from "$app/navigation";

  export let link : string;

  const handleClick = () =>
  {
    goto(link)
  }

</script>

<button class="nextBtn" on:click={handleClick}>
  x
</button>

<style>
  .nextBtn{
    width: 80px;
    aspect-ratio: 1;
    background-color: #888;
    border-radius: 50%;
    font-size: 30px;
  }
  
  @media screen and (max-width: 767px)
  {
    .nextBtn{
      width: 60px;
    }
  }
</style>