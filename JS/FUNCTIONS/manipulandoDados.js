
/* Manipulando Strings e Arrays 

- Separe um texto que contém espaços, em um novo array 
onde cada texto é uma posição do array. Depois disso, transforme
o array em um texto e onde eram espaços, coloque _

let phrase = "Eu quero um namorado"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)


// Manipulando Arrays

- Array com construtor

let myArray= ['a' , 'b', 'c']
console.log(myArray) //array normal

let myArray= new Array ['a' , 'b', 'c']
console.log(myArray) // array com construtor


// contar elementos do array

console.log(("a", "b" , "c").lenght)

// transformar uma cadeia de caracteres 
em elementos de um array

let word = "manipulação"
console.log(Array.from(word))

//Ex de manipulação de Arrays

let techs = ["html" , "css", "js"]

- adcionar um item no fim
techs.push("nodejs")

-adicionar no começo
techs.unshift("sql")

- remover do fim
techs.pop()

- remover do começo
techs.shift()

- pegar somente alguns elementos do array
console.log(techs.slice(1 , 3))

- remover 1 ou mais itens em qualquer
posição do array
techs.splice(1 , 2)

- encontrar a posição de um elemento 
no array
let position =  techs.positionOf('csss')

*/

