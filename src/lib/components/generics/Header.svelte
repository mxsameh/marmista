<script lang='ts'>
	import Menu from "./Menu.svelte";
  import MenuBtn from "./MenuBtn.svelte";
	import IsMenuOpened from "$lib/stores/menu";
	import ActiveNavTab from "$lib/stores/activeNavTab";

  const handleClick = () =>
  {
    $IsMenuOpened = !$IsMenuOpened
  }

  $:activeLink =  $ActiveNavTab


</script>

<Menu />

<header class="header">
  <a class="logo" href="/">
    <h1 class="logo_icon">M</h1>
  </a>

  <div class="nav">
    <ul class="nav_list">
      <a href="/" class="nav_link" class:is-active-link={activeLink == 'home'}>home</a>
      <a href="/products" class="nav_link" class:is-active-link={activeLink == 'products'}>products</a>
      <a href="/gallery" class="nav_link" class:is-active-link={activeLink == 'gallery'}>gallery</a>
      <a href="contact" class="nav_link" class:is-active-link={activeLink == 'contact'}>contact</a>
    </ul>
  </div>

  <MenuBtn on:menuBtnClicked={handleClick} />
</header>

<style lang='scss'>
  :root{
    --header-width : 170px ;
    --header-height : 66px;
  }
  .header{
    width: fit-content;
    height: 100vh;
    padding: 24px 0;
    padding-left: 24px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
  }
  
  .logo{
    width: fit-content;
    &_icon{
      font-size: 40px;
      font-family: 'Playfair Display', serif;
      font-weight: 500;
    }
  }

  .nav{
    height: 100%;
    display: flex;
    align-items: center;

    &_list{
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
    &_link{
      font-family: 'Playfair Display', serif;
      text-transform: uppercase;
      font-size: 24px;
      color: var(--gray-500);
      width: fit-content;
      cursor: pointer;
      &:hover{
        color: black;
      }
    }
  }
  .is-active-link{
    color: black;
    text-decoration: line-through;
  }


  @media screen and (max-width: 1023px){
    .header{
      height: unset;
      width: 100vw;
      padding: 16px 20px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      mix-blend-mode: luminosity;
    }
    .nav{
      display: none;
    }

  }
  </style>