// let x = []
// console.log(typeof x)
// x = 2
// console.log(typeof x)
// console.log(x)

// let anArray = [1,2,3,4,5]
// function multiplyArray(anArray, multiplier){
//     let x = []
//     for(let i = 0; i < anArray.length; i++){
//         x[i] = anArray[i] * multiplier
//     }
//     console.log(x)
// }

// multiplyArray(anArray, 3)


// function oddOrEven(anArray){
//     let y = []
//     for(let j = 0; j < anArray.length; j++){
//         if(anArray[j] % 2 == 0){
//             y[j] = "True"
//         }
//         else y[j] = "False"
//     }
//     console.log(y)
// }

// oddOrEven(anArray)

// let person = {}
// let personArray = ['name', 'age', 'colour', 'gender', 'height']
// let personDetails = ['Jae', '22', 'Fair', 'Female', '5"2']

// for(let i = 0; i < person.length; i++){
//     person[i] = personArray[personDetails]
// }
// console.log(person)

// const array = [1,2,3]
// const [one, five, two] = array

// console.log(one)

// const object = {five : "hyg", twny: "jif", vuyyoy: "lop"}
// const {five, gyhw} = object

// console.log(five)

// let firstNumber = 3;
// let secondNumber = 9;
function getNumbers(firstNumber, secondNumber) {
    let newArray = [firstNumber, secondNumber]
    return newArray
}

console.log(getNumbers(9,5))

let me = getNumbers(2,5)
console.log(me)
const [one, two] = me
const[one, two] = getNumbers()