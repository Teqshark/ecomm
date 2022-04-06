

import {
  ImageEdge,
  Product as ShopifyProduct
} from "../schema"

import { Product } from "@common/types/products"
// function normalizeProductImages({edges}: {edges: Array<ImageEdge>}) {
//   debugger
//  return edges.map(({node: { originalSrc: url, ...rest }}) => {
//    debugger
//     return {
//       url: `/images/${url}`,
//       ...rest
//     }
//   })
// }


// take edges and return ImageEdge[]
const normalizeProductImages = ({edges}: {edges: Array<ImageEdge>}) =>
  edges.map(({node: { originalSrc: url, ...rest}}) => ({
      url: `/images/${url}`,
      ...rest }
  ))


// normalize product, get product details from productNode 

export function normalizeProduct(productNode: ShopifyProduct): Product {
  // save product detailsls as variables, 
  const {
id,
title: name,
handle,
vendor,
description,
images: imageConnection,
...rest
  } = productNode


  // create new product object from variables 
  const product = {
    id, 
    name,
    vendor, 
    description,
    // path = url 
    path: `/${handle}`,
    // slug = path without /
    slug: handle.replace(/^\/+|\/+$/g, ""),
    images: normalizeProductImages(imageConnection),
    ...rest
  }

  return product
}

