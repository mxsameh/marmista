import Products from "$lib/stores/products"
import { get } from "svelte/store"

const getProduct = (productName : string) =>
{
  productName = productName.replaceAll('-',' ');
  const products = get(Products)
  const product = products.filter(product => product.name.toLowerCase() == productName.toLowerCase())[0] || null
  return product
}

const getProductLinks = (productId : number) =>
{
  const products = get(Products)
  const productsLength = products.length
  const currentIndex = productId;
  const nextIndex = currentIndex == productsLength-1 ? 0 : currentIndex+1
  const nextProduct = products[nextIndex]
  const prevIndex = currentIndex == 0 ? productsLength-1 : currentIndex-1
  const prevProduct = products[prevIndex]
  const nextProdcutLink = nextProduct.link
  const prevProdcutLink = prevProduct.link
  return {next: nextProdcutLink, prev: prevProdcutLink};
}

export {getProduct, getProductLinks}