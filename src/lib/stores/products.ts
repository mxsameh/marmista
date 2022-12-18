import { writable } from "svelte/store";

const data = [
  {
    id : 1,
    image:'/product1.png',
    name:'silver river grey',
    details:'Lorem ipsum dolor sit amet consectetur at elementum ornare arcu maecenas vitae. Ultricies eget volutpat purus vitae. Suspendisse'
  },
  {
    id : 2,
    image:'/product2.jpg',
    name:'blue zone',
    details:'Lorem ipsum dolor sit amet consectetur at elementum ornare arcu maecenas vitae. Ultricies eget volutpat purus vitae. Suspendisse'
  },
  {
    id : 3,
    image:'/lilack.webp',
    name:'lilack',
    details:'Lorem ipsum dolor sit amet consectetur at elementum ornare arcu maecenas vitae. Ultricies eget volutpat purus vitae. Suspendisse'
  },
  {
    id : 4,
    image:'/marmara.webp',
    name:'marmara',
    details:'Lorem ipsum dolor sit amet consectetur at elementum ornare arcu maecenas vitae. Ultricies eget volutpat purus vitae. Suspendisse'
  },
]

const Products = writable(data)


export default Products;