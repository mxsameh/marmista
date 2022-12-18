import Products from "$lib/stores/products"
import { get } from "svelte/store"

const getProduct = (productName : string) =>
{
  productName = productName.replaceAll('-',' ');
  const products = get(Products)
  const product = products.filter(product => product.name.toLowerCase() == productName.toLowerCase())[0] || null
  return product
}

const getNextProductLink = (productId : number) =>
{
  const products = get(Products)
  const productsLength = products.length
  const currentIndex = productId ;
  const currentProduct = products[currentIndex]
  const nextIndex = currentIndex % productsLength
  const nextProduct = products[nextIndex]
  const nextProdcutName = nextProduct.name.replaceAll(' ','-')
  const nextProdcutLink = `/products/${nextProdcutName}`
  return nextProdcutLink;
}

export {getProduct, getNextProductLink}