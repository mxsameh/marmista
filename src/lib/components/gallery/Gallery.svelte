<script lang="ts">
	import positionImages, { scrollImages } from '$lib/utils/gallery';
	import { onMount, afterUpdate } from 'svelte';

	export let images : any;
	export let dimens : any = [];

	let gallery: HTMLDivElement;

	let dimenArr : string[] = []

	const dimen = (img : HTMLImageElement) =>{
		 let dim = `${img.naturalWidth}x${img.naturalHeight}`
		 dimenArr.push(dim)
	}
	let imgss : any;

	const copy = () =>
	{
		imgss.forEach(dimen)
		let string =  JSON.stringify(dimenArr)
		navigator.clipboard.writeText(string)
		console.log( dimenArr );
		alert('copied!!')
	}

	let galleryImages : NodeListOf<HTMLImageElement>;
	onMount(() => {
		galleryImages = document.querySelectorAll('.gallery_img') as NodeListOf<HTMLImageElement>;
		imgss = galleryImages
		
		positionImages(galleryImages, gallery);

		// RESIZE EVENT LISTENER
		window.addEventListener('resize', () => {
			if(gallery) positionImages(galleryImages, gallery);
		});

		// SCROLL EVENT LISTENER
		window.addEventListener('scroll', () => {
			scrollImages(galleryImages);
		});
	});

	afterUpdate(()=>{
		galleryImages = document.querySelectorAll('.gallery_img') as NodeListOf<HTMLImageElement>;
		positionImages(galleryImages,gallery)
	})

	let active = false


</script>

<div class="gallery" bind:this={gallery}>
	<div class="gallery_wraper" >
		{#each images as img, i}
			<img  data-key={i} data-dimen={dimens[i]} class="gallery_img" src={img} alt={`${i}.jpg`} />
		{/each}
	</div>
</div>

<style lang="scss">
	.gallery {
		width: 100%;
		position: relative;
	}
	.gallery_wraper {
		width: 100%;
		position: fixed;
	}
	.gallery_img {
		position: absolute;
	}
</style>