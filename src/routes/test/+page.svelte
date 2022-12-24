<script lang='ts'>
  import Contact from "$lib/components/home-page/Contact.svelte";
import gsap from "gsap";
	import ScrollTrigger from "gsap/dist/ScrollTrigger";
	import { onMount } from "svelte";

  gsap.registerPlugin(ScrollTrigger);

  onMount(()=>
  {
    // const sections = gsap.utils.toArray(".section") as HTMLDivElement[];

    // sections.forEach((container,i)=>{

    //   ScrollTrigger.create({
    //     trigger: container,
    //     start: "top top",
    //     pin:true,
    //     pinSpacing: false,
    //     // snap: 1,
    //   })

    // })

  })

  

  
</script>

<Contact/>

<!-- <div class="main">
  <div class="section">
    <h1>sectoin 1</h1>
  </div>
  <div class="section sec">
    <h1>sectoin 2</h1>
  </div>
</div> -->

<style lang='scss'>
  h1{
    font-size: 8vw;
    color: white;
  }
  .main{
    width: 100%;
    // min-height: 100vh;
    // background-color: antiquewhite;
    height: 100vh;

  }
  .section{
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100%;
    background-color: black;

  }
  .sec{
    background-color: red;

  }
  
</style>