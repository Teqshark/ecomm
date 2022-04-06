// returning type of promise 
export async function play() {
  type Greeting = {message: string}
  
  type InferHelloProps<T> = T extends () => Promise<{props: infer Props}> ?
  Props : never 

  const getHelloProps = async function() {
    const greeting: Greeting = {message: "Hi Friends"}

    return {
      props: {
        greeting, 
        data: {
          cars: ["car1", "car2", "car3"]
        }
      }
    }

  }



  function sayHello(props: InferHelloProps<typeof getHelloProps>) {
    console.log(props.greeting)
  }
const data = await getHelloProps() 
sayHello(data.props)
}
/**
 

interface Person {
  name: string 
  age: number 
  grades: number[]
}
type PersonKey = keyof Person
//  generic type T = R or number 
type ReturnType<T> = T extends () => infer R ? R : number 
// generic type returns strings ?
// type ReturnType<T> = T extends () => string ? string : number 

export function play() {
// multiple generic parameters
  type Logger<
    FP = string,
    SP = number, 
    RP = string> = (param1: FP, param2: SP) => RP

const superLogger: Logger<string, number, string > = (name, age ) => {
  return 'Hellow World!'
}


const logger: Logger= (brand, age) => {
  return brand + age
}

  // function logger() {
    // return true
  // }
  // const loggerReturn: ReturnType<typeof logger> = false
  // const personKey : keyof Person = "grades"

// with no parameters)
  //  function logger() {
    // return 'Heloow World'
  // }
  // const loggerReturn: ReturnType<typeof logger> = "hi there!"
}

*/
/**
 
interface Person {
  name: string
  age: number
}

export default function play() {
 function logger(...args: any[]) {
    return "hello world"
  }

  const kindaLogger: typeof logger = (name: string, age: number) => "Hi Guys!"

  const person = {
    name: "Filip",
    age: 30
  }

  const person2: typeof person = {
    name: "John",
    age: 35
  }



  kindaLogger("", 20)


}
 */



/**
 
interface Person {
  name: string
  age: number
}
type CustomArray<T> = {
  [index: number]: T
}

type CustomObject<T = string | number | Person> = {
  [key: string]: T
}

type CustomObjectNum< T = string | number | Person> = {
  [key: number]: T 
}

export default function play() {

  const person: CustomObject = {
    "age": 23,
    "name": "asdasd",
    "city": "sadasdasd",
    person: {
      name: "Filip",
      age: 23
    }
  }

  const user: CustomObjectNum = {
    0: 'Don',
    '1': 'yes',
    2: 49,
    3: {
      name: 'Max',
      age: 19
    }
  }
  console.log(user[0])
  console.log(user)
  console.log(user['1'])
  console.log(user[1])
  console.log(user['0'])
  console.log(user[3])
  let userPerson = user[3]
  console.log(typeof userPerson)
  // console.log(userPerson implements Person )
console.log('log customobject[3] as person')
console.log((user[3] as Person).age)
}

 */


/**
 
interface Person {
  name: string
}
type CustomArray<T> = {
  [index: number]: T
}

type CustomObject<T = string | number | Person> = {
  [key: string]: T
}


export default function play() {

  const items: CustomArray<string> = ["1", "2", "3"]
  const items2: CustomArray<number> = [1,2,3]
  const person: CustomObject = {
    "age": 23,
    "name": "asdasd",
    "city": "sadasdasd",
    person: {
      name: "Filip"
    }
  }


}

 */


/**
custom types 

 
interface Person {
  name: string
}

type CustomArray<T> = {
  [index: number]: T
}
export default function play() {
   const items: CustomArray<string> = ["1", "2", "3"]
  const items2: CustomArray<number> = [1,2,3]

}




// Single from array type
interface Person {
  name: string 
  age: number 
}

type SingleType<T> = T extends any[] ? T[number] : T

export default function play() {
  type Type1 =  SingleType<string[]>
  type Type2 = SingleType<number[]>
  type Type3 = SingleType<Person>
}

;4 nm

*/
/* 
generic types with ternary 

interface Person {
  name: string
}
interface Student extends Person {
  age: number
}
interface PostGraduadeStudent extends Person {
  age: number
  projects: string[]
}

type StudentInfo<T extends any = Student> = T extends Student ? {
  data: T
  grades: number[]
} : string

type Car = {engine: string}

export default function play() {


  function logStudentInfo(info: StudentInfo<Student>) {
    console.log(info)
    console.log(info)
  }

  const info = {
    data: {
      name: "Filip",
      age: 30
    },
    grades: [1,2,3,1]
  }
  logStudentInfo(info)
}
*/

/* generic types with extends

interface Person {
  name: string

}


interface Student extends Person {
  age: number
}


interface PostGraduadeStudent extends Person {
  age: number

  projects?: string[]
}


interface StudentInfo<T extends Student = Student> {
  data: T
  grades: number[]
}


export default function play() {


  function logStudentInfo(info: StudentInfo<PostGraduadeStudent>) {
    console.log(info.data.name)
    console.log(info.data.age)
    console.log(info.data.projects)
  }

  
  const info = {
    data: {
      name: "Filip",
      age: 30
    },
    grades: [1,2,3,1]
  }

  logStudentInfo(info)
}
*/
/*
default values of generics 
interface Person {
  name: string
  age: number
  city: string
}
class Student implements Person {
  name = ""
  age = 0
  city = ""
}
class BussinessPerson implements Person {
  name = ""
  age = 0
  city = ""
  salary = 1000
}

type Car = {
  brand: string
  age: number
  name: string
  city: string
}


class Logger<T extends Person = Car> {
  log(items: Array<T>, callback: (i: T) => void) {
    items.forEach((item) => {
      callback(item)
       })
  }
}

export default function play() {

  const logger = new Logger()

  const persons = [{name: "filip", age: 30, city: "", brand: ""}, {name: "john", age: 25, city: "", brand: ""}]
  logger.log(persons, (person) => {
    console.log(person)
  })

  */
/*
interface Person {
  name: string
  age: number
  city: string
}

class Student implements Person {
  name = ""
  age = 0
  city = ""
}

class BussinessPerson implements Person {
  name = ""
  age = 0
  city = ""
  salary = 1000
}

interface Car {
  name: string
}

class Logger<T extends Person> {
  log(items: Array<T>, callback: (i: T) => void) {
    items.forEach((item) => {
      callback(item)
    })
  }
}

export default function play() {

  
  const logger = new Logger<BussinessPerson>()

  const persons = [{name: "filip", age: 30, city: "", salary: 1000}, {name: "john", age: 25, city: "", salary: 1000}]
  logger.log(persons, (person) => {
    console.log(person)
  })

} 

 */




/**
// generic extends
interface Person {

  name: string
  age: number
}


class Logger<T> {
  log(items: Array<T>, callback: (i: T) => void) {
    items.forEach((item) => {
      callback(item)
    })
  }
}


export default function play() {


  const logger = new Logger<string>()

  const cars = ["audi", "skoda", "citroen"]
  logger.log(cars, (car) => {
    console.log(car)
  })


  const logger2 = new Logger<number>()

  const numbers = [1,2,3,4]
  logger2.log(numbers, (num) => {
    console.log(num)
  })

  const logger3 = new Logger<Person>()

  const persons = [{name: "filip", age: 30}, {name: "john", age: 25}]
  logger3.log(persons, (num) => {
    console.log(num)
  })

}

 */


// extending types
// interface Person {
//   kind: "business" | "academic" | "otherType"
//   name: string
//   age: number
// }

// interface BusinessPerson extends Person {
//   kind: "business"
//   salary: number
// }

// interface AcademicPerson extends Person {
//   kind: "academic"
//   publications: string[]
// }

// type Human = BusinessPerson | AcademicPerson | { kind: "otherType", special: string}

// type RaceCar = {
//   name: string
//   maxSpeed: 200
//   team: string 
// }
// type CityCar = {
//   name: string
//   space: string
//   maxSpeed: 100
// }
// type Car = RaceCar | CityCar

// export default function play() {
//   const car: RaceCar = {
//     name: "Race Car",
//     maxSpeed: 200,
//     team: "ferari"
//   }

//   function logPersonInfo(human: Human) {

//     if (human.kind === "academic") {
//       console.log(human)
//     } else if (human.kind === "business") {
//       console.log(human)
//     } else if (human.kind === "otherType") {
//       console.log(human)
//     } else {
//       console.log(human)
//     }
//   }

//   function logCarInfo(car: Car) {
//     switch(car.maxSpeed) {
//       case 200:
//         console.log(car.team)
//         break;
//       case 100:
//         console.log(car)
//         break;
//       default:
//         console.log(car)
//     }

//   }
// }



/**
 * 
interface Person {
  kind: "business" | "academic" | "otherType"
  name: string
  age: number
}

interface BusinessPerson extends Person {
  kind: "business"
  salary: number
}

interface AcademicPerson extends Person {
  kind: "academic"
  publications: string[]
}

type Human = BusinessPerson | AcademicPerson | { kind: "otherType", special: string}

type RaceCar = {
  name: string
  maxSpeed: 200
@@ -36,9 +41,20 @@ export default function play() {
    team: "ferari"
  }

  function logCarInfo(car: Car) {
    console.log(car.name)
  function logPersonInfo(human: Human) {

    if (human.kind === "academic") {
      console.log(human)
    } else if (human.kind === "business") {
      console.log(human)
    } else if (human.kind === "otherType") {
      console.log(human)
    } else {
      console.log(human)
    }
  }

  function logCarInfo(car: Car) {
    switch(car.maxSpeed) {
      case 200:
        console.log(car.team)
@@ -49,6 +65,5 @@ export default function play() {
      default:
        console.log(car)
    }

  }
}
 */
// export default function play() {
// const random = Math.random() > 0.5 ? "hello" : [1,2]


// if (typeof random ==="string") {
//   const upper = random.toUpperCase()
// } else {
//   console.log(random)
// }

// console.log(random.length)

// }
// interface Person {
//   name: string
//   age: number
// }
// class Person {
//   name: string 
//   age: number 
//   constructor(name:string, age: number) {
//     this.name = name 
//     this.age = age 
//   }
// }
// type CustomArray<T> = {
//   [index: number]: T 
// }





// export default function play() {
//   console.log("Hello World")
// const name:string = 'Josh'
// const age:number = 30
//   const person: Person = {
//     name: 'Filip',
//     age:  30 
//   }
// interface PersonalLogggerFn {
//   (name:string, age:number):string
// }
// type PersonalLoggerFn = (personName: string, personAge: number) => string
// const logPersonInfo: PersonalLogggerFn = 
// (personName:string, personAge: number): string => {
//   const info = `Nam: ${personName}, age: ${personAge}`
//   console.log(info)
//   return info 
// }
//   const log: string = logPersonInfo(name, age)

//   const items: CustomArray<string> = ["1","2", "3"]

//   function logPersonInfo2( person: Person) {
//     const info = `Name ${person.name} age; ${person.age}`
//     console.log(info)
//     return info 
//   }

//   logPersonInfo2(new Person('jay', 30))
// }