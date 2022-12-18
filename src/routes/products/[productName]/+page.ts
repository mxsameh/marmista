import { getNextProductLink, getProduct } from "$lib/utils/products";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load : PageLoad = ({ params }) =>
{
  const productName = params.productName
  const product = getProduct(productName);
  const nextProductLink = getNextProductLink(product.id)

  if(!product) throw error(400,'nooooo')

  return{
    product,
    nextProductLink
  }
}
