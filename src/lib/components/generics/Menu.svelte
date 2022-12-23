<script lang='ts'>
	import IsMenuOpened from "$lib/stores/menu";
  import Nav from "./Nav.svelte";
	import { onMount } from "svelte";
  import gsap from 'gsap';
  
  let menu : HTMLDivElement;
  let isOpened = $IsMenuOpened;
  
  const tl = gsap.timeline({paused: true})

  const closeMenu = () =>
  {
    $IsMenuOpened = false
  }

  $:{
    if($IsMenuOpened) tl.play()
    if(!$IsMenuOpened) tl.reverse()
  }

  onMount(()=>
  {
    tl.
    fromTo(menu,{
      y: "100vh",
    },{
      y: "0vh",
      onStart:()=>{isOpened = $IsMenuOpened},
      onReverseComplete:()=>{isOpened = $IsMenuOpened}
    })
  })


  
</script>


<div class="menu" class:isOpened bind:this={menu}>
  <Nav on:linkClick={closeMenu}/>
</div>


<style>
  .menu{
    display: none;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--gray-100);
    z-index: 998;
  }
  .isOpened.menu{
    display: block;
  }

@media screen and (min-width: 1023px){
  .menu{
    display: none !important;
  }

}
</style>