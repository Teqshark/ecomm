


import {
  normalizeProduct,
  getAllProductsQuery
 } from "../utils"
import { ProductConnection } from "../schema"
import { Product } from "@common/types/products"
import { ApiConfig } from "@common/types/api"

type ReturnType = {
  products: ProductConnection
}

// async function with config returns prodct array 
const getAllProducts=  async (config: ApiConfig): Promise<Product[]> =>{
  // save fetch return as data object 
  // url = apiUrl 
  // query = graphql query
  const {data} = await config.fetch<ReturnType>({
    url: config.apiUrl,
    query: getAllProductsQuery
  })

   // normalize and return data 
  //  map over edges of product return nodes 
  const products = data.products.edges.map(({node: product}) => 
   normalizeProduct(product)
  ) ?? []
  return products
} 

export default getAllProducts 