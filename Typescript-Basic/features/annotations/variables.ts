const apples: number = 5
let speed:string = 'fast'
let hasName:boolean = false

let nothingMuch:null = null
let nothing:undefined = undefined

// build in object
let now:Date = new Date()


// Array
let colors: string[] = ['red', 'green', 'yellow']
let myNumbers: number[] = [1,2,3]

// Classes
class Car {

}
let car:Car

// Object literal
let point:{x:number; y:number} = {x: 0, y:20}

// Function
const logNumber:(i:number)=>void = (i:number) =>{
  console.log(i)
}

// When to use annotations
// 1) Function that returns the 'any' type

const json = '{"x":10, "y":20}'
const coordinates:{x:number; y:number} = JSON.parse(json)

// 3) Varibale whose type cannot be inferred correctly

let numbers= [-10,-1,12]

let numberAboveZero:boolean|number = false

for (let i = 0; i < numbers.length; i++){
  if(numbers[i]>0){
    numberAboveZero = numbers[i]
  }
}