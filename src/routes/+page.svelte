<script lang="ts">
	import ScrollTrigger from "gsap/dist/ScrollTrigger";
	import {gsap} from 'gsap';
	import { onMount } from "svelte";
	import Main from "$lib/components/home-page/Main.svelte";
	import Contact from "$lib/components/home-page/Contact.svelte";

  gsap.registerPlugin(ScrollTrigger);
  let container : HTMLDivElement;

  onMount(()=>
  {
    const sections = gsap.utils.toArray(".section") as HTMLDivElement[];

    sections.forEach(container =>{
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        pin:true,
        pinSpacing: false,
        // snap: 1,
      })
    })

    container.style.opacity="1"

  })
</script>


<div class="container" style:opacity="0" bind:this={container}>
	<Main/>
	<Contact/>
</div>

<style lang="scss">
	@media screen and (max-width: 767px){
		.container{
			margin-top: -66px;
		}
	}
</style>
