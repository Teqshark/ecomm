


import { ReactNode } from "react";



// 
interface Props {
  children?: ReactNode | ReactNode[];
  // layout?: "A" | "B'"
}

// export const Grid = ({ children, layout}: Props) => {
//   return <div className={styles.root}>{children}</div>
// }

// import { FC } from "react"
// const Layout: FC = ({children}) => {
//   return (
//     <div className="layout">
//         {children}
//     </div>
//   )
// }


// not using FC bc of issues using scratch functional component 
// returns layout class div  with children
const Layout = ({children}: Props):JSX.Element => {
return (<div className="layout">
  {children}
</div>
)
}


export default Layout


// Doesn't work correctly with defaultProps
// This is a fairly moot point as in both cases it's probably better to use ES6 default arguments, but...

// type  ComponentProps = { name: string; }

// const  Component = ({ name }: ComponentProps) => (<div>
// 	{name.toUpperCase()} /* Safe since name is required */
// </div>);
// Component.defaultProps = { name: "John" };

// const  Example = () => (<Component />) /* Safe to omit since name has a default value */



// {/* <Select>
// 	<Select.Item />
// </Select>

// const Select = (props: SelectProps) => {/* ... */}
// Select.Item = (props: ItemProps) => { /*...*/ } */}


/**
  I can define a generic component like:

type GenericComponentProps<T> = {
   prop: T
   callback: (t: T) => void
}
// const GenericComponent = <T>(props: GenericComponentProps<T>) => {/*...*/

//  */