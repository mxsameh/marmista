import { writable } from "svelte/store";

const data = [
  {
    id : 1,
    image:'/product1.png',
    name:'silver river grey',
    details:'Lorem ipsum dolor sit amet consectetur at elementum ornare arcu maecenas vitae. Ultricies eget volutpat purus vitae. Suspendisse',
    link : '/products/silver-river-grey'
  },
  {
    id : 2,
    image:'/product2.jpg',
    name:'blue zone',
    details:'Lorem ipsum dolor sit amet consectetur at elementum ornare arcu maecenas vitae. Ultricies eget volutpat purus vitae. Suspendisse',
    link : '/products/blue-zone'
  },
  {
    id : 3,
    image:'/lilack.webp',
    name:'lilack',
    details:'Lorem ipsum dolor sit amet consectetur at elementum ornare arcu maecenas vitae. Ultricies eget volutpat purus vitae. Suspendisse',
    link:'/products/lilack',
  },
  {
    id : 4,
    image:'/marmara.webp',
    name:'marmara',
    details:'Lorem ipsum dolor sit amet consectetur at elementum ornare arcu maecenas vitae. Ultricies eget volutpat purus vitae. Suspendisse',
    link:'/products/marmara',
  },
  {
    id : 5,
    image:'/product1.png',
    name:'silver river grey',
    details:'Lorem ipsum dolor sit amet consectetur at elementum ornare arcu maecenas vitae. Ultricies eget volutpat purus vitae. Suspendisse',
    link : '/products/silver-river-grey'
  },
  {
    id : 6,
    image:'/product2.jpg',
    name:'blue zone',
    details:'Lorem ipsum dolor sit amet consectetur at elementum ornare arcu maecenas vitae. Ultricies eget volutpat purus vitae. Suspendisse',
    link : '/products/blue-zone'
  },
  {
    id : 7,
    image:'/lilack.webp',
    name:'lilack',
    details:'Lorem ipsum dolor sit amet consectetur at elementum ornare arcu maecenas vitae. Ultricies eget volutpat purus vitae. Suspendisse',
    link:'/products/lilack',
  },
  {
    id : 8,
    image:'/marmara.webp',
    name:'marmara',
    details:'Lorem ipsum dolor sit amet consectetur at elementum ornare arcu maecenas vitae. Ultricies eget volutpat purus vitae. Suspendisse',
    link:'/products/marmara',
  },
]

const Products = writable(data)


export default Products;