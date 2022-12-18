import { writable } from 'svelte/store';

const gallery = {
	dimens: [
		'720x900',
		'720x900',
		'720x575',
		'720x576',
		'768x1024',
		'768x1024',
		'720x636',
		'720x900',
		'720x802',
		'720x900',
		'720x900',
		'720x1280',
		'719x479',
		'960x1280',
		'960x1280'
	],
	images: [
		'/gallery/1.jpeg',
		'/gallery/2.jpeg',
		'/gallery/3.jpeg',
		'/gallery/4.jpeg',
		'/gallery/5.jpeg',
		'/gallery/6.jpeg',
		'/gallery/7.jpeg',
		'/gallery/8.jpeg',
		'/gallery/9.jpeg',
		'/gallery/10.jpeg',
		'/gallery/11.jpeg',
		'/gallery/12.jpeg',
		'/gallery/13.jpeg',
		'/gallery/14.jpeg',
		'/gallery/15.jpeg'
	]
};

const GalleryStore = writable(gallery);

export default GalleryStore;
