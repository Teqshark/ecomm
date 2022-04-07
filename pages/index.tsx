
import type { InferGetStaticPropsType } from "next"
import getAllproducts from "@framework/product/get-all-products"
import { getConfig } from "@framework/api/config"
import { Layout } from "@components/common"

   
import Head from 'next/head'
// calculate staticProps(products[] and revalidation period)
export async function getStaticProps() {
  // get config from framework file
  const config = getConfig()

  console.log(config.apiUrl)
  console.log(config.fetch)

  // gets allProducts using frameowrk getAllProducts function 
  const products = await getAllproducts(config)

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}


// infer types of StaticProps
export default function Home({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center space-y-4">
      { JSON.stringify(products) }

    </div>
  )
}

// attach Layout to Home Component function 
Home.Layout = Layout 