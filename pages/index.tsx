
import type { InferGetStaticPropsType } from "next"
import getAllproducts from "@framework/product/get-all-products"
import { getConfig } from "@framework/api/config"
import { Layout } from "@components/common"

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
    <div>
      { JSON.stringify(products) }
    </div>
  )
}

// attach Layout to Home Component function 
Home.Layout = Layout 