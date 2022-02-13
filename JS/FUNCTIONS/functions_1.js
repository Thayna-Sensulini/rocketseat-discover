/*funcão anonima - function expression

const sum = function(number1 , number2){
       console.log(number1+ number2) // parametros
}

sum(2 , 3) // arguments da função executada

___________________________________________________
const sum = function(number1 , number2){
    total= number1 + number2 
    return total
}
   

let number1 = 34
let number2 = 25

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma é ${sum(number1, number2)}`)
console.log(total)


// function scope

let subject 
function createThink(subject){
    return subject
}

console.log(createThink(subject))


//Ex

let subject = 'create video'
function createThink(subject){
    subject = 'study'
    return subject
}

console.log(createThink(subject))
console.log(subject)

//ex2

sayMyName()
function sayMyName(){
    console.log('Thay')
}

// arrow function - seta

const sayMyName =() => {
    console.log ('Thay')

}
sayMyName('Thay')

// callback function

function sayMyName(name){
    console.log('antes de executar a função callback ')

    name()
     console.log('depois
      de executar a função callback ')
}
sayMyName(
       () => {
           console.log('estou em uma callback')
       }
)

// function () construcot
- expressão new
- criar um novo objeto
- this keyword

function Person(){
    this.name = name
    this.walk = function(){
        return this.name + "está andando"
    }
}
  const thay = new Person("Thay")
  const kaka = new Person("Carlos")

  console.log(thay.walk())
  console.log(kaka.walk())

  //prototype
- prototype-based language
- prototype chain
- _proto_

// type conversion e type coersion

type conversion - altera de um tipo de dado para outro

type coersion 



*/

