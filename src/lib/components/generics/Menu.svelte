<script lang='ts'>
	import IsMenuOpened from "$lib/stores/menu";
  import Nav from "./Nav.svelte";


  const closeMenu = () =>
  {
    $IsMenuOpened = false
  }
  
</script>


<div class="menu" class:isOpened={$IsMenuOpened}>
  <Nav isMenu={true} on:linkClick={closeMenu}/>
</div>


<style>
  .menu{
    display: none;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: antiquewhite;
    z-index: 998;
  }
  .isOpened.menu{
    display: block;
  }

@media screen and (min-width: 768px){
  .menu{
    display: none !important;
  }

}
</style>