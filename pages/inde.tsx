import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
// import play from "../playground"


type Person = {
  name: string
  age: number 
}


type keyOfPerson = keyof Person


let a: AddEventListenerOptions 
let  b: NodeJS.Process

// console.log(b.config)
const name:keyOfPerson = 'name'
const age:keyOfPerson = 'age'

console.log('log age')
console.log(age)

export default function Home() {

  useEffect(() => {
    // play();
  }, [])
  let user: Person = {
    name: 'Peter',
    age: 300
  }
  const message: string = " Hello World!"
  return (
  <>
    <div> Hello World!{name} age: {age}</div>
    <div>{user.name}</div>
    <div>{user.age}</div>
  </>

  )
}
