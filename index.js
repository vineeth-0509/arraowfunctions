/**
 * functiosn expressions= a way to define functions as values or variables.
  callbacks in asynchronous operations
  2.Higher-order function
  3.closures
  4.Event Listeners
 */
// const hello=(name,age)=>{console.log(`Hello ${name}`)
//                         console.log(`You are ${age} old:`)};
// hello(`Bro`,25);

const numbers=[1,2,3,4,5,6];
const squares= numbers.map((element)=> Math.pow(element,2));
const cubes=numbers.map((element)=> Math.pow(element,3));
const evenNums=numbers.filter((element)=> element % 2 === 0);
const oddNums=numbers.filter((element)=> element % 2!== 0);
const total=numbers.reduce((accumulator,element)=> accumulator+ element);
console.log(total);
console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
 