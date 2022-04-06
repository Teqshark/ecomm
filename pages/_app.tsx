



import "@assets/main.css"
import { AppProps } from "next/app"
import { FunctionComponent } from "react"
import {ReactNode} from 'react'

interface ReturnNode {
  children: ReactNode |  ReactNode[];
} 
const Noop = ({children}:ReturnNode):JSX.Element => <>{children}</>


// page component and page props passed in 
// Layout included in component object
function MyApp({Component, pageProps}: AppProps & {Component: {Layout: FunctionComponent}}) {

  // if no layout Noop returns just chldren in fragment
  const Layout = Component.Layout ?? Noop
  return (
    <Layout>

    <Component {...pageProps } />
    </Layout>
    
  )
}

export default MyApp