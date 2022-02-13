/* 

* Variáveis: 

- nomes simbólicos para receber algum valor
- atalhos de código
- identificadores
- 3 nomes de variável (var, let , const)
- não precisa necessariamente de um tipo, tem previamente definido.

const - não pode ser alterada

-scope - determina a visibilidade de uma variável no JS

    BLOCK STATEMENT - declaração de bloco
```JS 
- vamos iniciar um bloco

{
    aqui dentro é o bloco e posso colocar qualquer código
} - fechamos o bloco

O bloco também criará um novo escopo que chamamos de block-scoped



- var - global e local e pode funcionar fora de um escopo de bloco
-hoisting - elevação - js faz automático


* Const e let são locais e só funcionam no escopo onde foi criado

ex: 

const y =1

{
    const y = 0
    console.log('> existe y' , y)
}

    console.log('> existe y depois do bloco?' , y)


* Nomeando variáveis

- js é case sensitive
- js aceita a cadeia de caracteres unicode

> Posso: 
-iniciar com esses caracteres especiais : $ _
- iniciar com letras
- colocar acentos
- letras maiúsculas e minusculas tem diferença

> Não posso: 
- iniciar com números
- colocar espaços vazios no nome

> Ideal:
- criar nomes que fazem sentido
- que explique o que a varíavel é ou faz
- camelCase
- snake_case
- escrever em inglês


* Variáveis e tipos de dados 
-Declaração 
ex: var name

-Assignment ou atribuição de valores
ex: name = "Mike"

- Tipo de dados atribuído
ex: console.log(typeof name)

- Agrupamento de declarações
ex: 
let age, isHuman

age = 18 
isHuman = true

console.log(name, age , isHuman)

*/
