<script lang='ts'>
	import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();


  const handleMenuBtn = () =>
  {
    dispatch('menuBtnClicked')
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="menu_btn" on:click={handleMenuBtn}>
  <div class="menu_icon">
    <span class="menu_line"></span>
    <span class="menu_line"></span>
  </div>
</div>


<style>
  .menu_btn{
    display: none;
  } 
  .menu_icon{
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
  }

  .menu_line{
    display: inline-block;
    width: 48px;
    height:5px;
    background-color: black;
  }

  @media screen and (max-width: 767px){
    .menu_btn{
      display: block;
    }
  }
  
</style>