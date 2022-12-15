<script lang='ts'>
	import MenuBtn from "./MenuBtn.svelte";
	import Menu from "./Menu.svelte";
  import Nav from "./Nav.svelte";
	import IsMenuOpened from "$lib/stores/menu";

  const handleClick = () =>
  {
    $IsMenuOpened = !$IsMenuOpened
  }

</script>

<header class="header">
  <div class="logo">
    <h1 class="logo_icon">M</h1>
  </div>

  <div class="nav">
    <Nav/>
  </div>

  <MenuBtn on:menuBtnClicked={handleClick} />
  
</header>

<Menu />

<style>
  :root{
    --header-height: 84px;
  }
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: absolute;
    padding: 24px 40px 0;
    z-index: 999;
  }
  .logo{
    border-bottom: 2px solid black;
  }
  .logo_icon{
    font-size: 50px;
    font-family: 'Courier New', Courier, monospace;
  }

  @media screen and (max-width: 767px)
  {
    :root{
      --header-height: 76px;
    }
    .header{
      padding: 16px 16px 0;
    }
    .nav{
      display: none;
    }
  }
  
</style>