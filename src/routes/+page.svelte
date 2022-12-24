<script lang="ts">
	import ScrollTrigger from "gsap/dist/ScrollTrigger";
	import {gsap} from 'gsap';
	import { onMount } from "svelte";
	import Main from "$lib/components/home-page/Main.svelte";
	import Contact from "$lib/components/home-page/Contact.svelte";

  gsap.registerPlugin(ScrollTrigger);

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
		
		const $header = document.querySelector('.header')

		// gsap.to($header,{
		// 	backgroundColor : "black",
		// 	duration: .2,
		// 	scrollTrigger:{
		// 		trigger: ".contact",
		// 		start: "top 30%",
		// 		toggleActions: "play none none reverse",

		// 	}
		// })

  })
</script>


<div class="container">
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
