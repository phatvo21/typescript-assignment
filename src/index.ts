import { MyArray } from "./barebone";
import { myFunc } from "./arrow-function";
import {testRequest} from "./error-handle";
import {hundredTimes} from "./cache-response";

// Start testing Barebone class

const stringAry = new MyArray();
stringAry.add('aaa');
stringAry.add('bbb');
stringAry.add('ccc');
stringAry.remove('bbb');
console.log(stringAry.getValues());


const numberAry = new MyArray();
numberAry.add(1);
numberAry.add(2);
numberAry.add(3);
numberAry.remove(2);
console.log(numberAry.getValues());

const booleanAry = new MyArray();
booleanAry.add(true);
booleanAry.add(false);

const numberAndStringMixedAry = new MyArray();
numberAndStringMixedAry.add(1);
numberAndStringMixedAry.add('bbb');

// End testing Barebone class


// Start testing arrow function

console.log(myFunc());
console.log(myFunc({ firstParam: 'first', secondParam: 'second' }));
console.log(myFunc({ firstParam: 'first' }));
console.log(myFunc({ secondParam: 'second' }));

// End testing arrow function


// Start testing Validator

console.log('We can using a Result type to leverage the type system');
console.log('Result will include two cases, it is success and failure');
console.log('we can using type in Typescript to makes this happen');
console.log('Here is an example');
console.log(testRequest('url.com'));
console.log(testRequest('https://www.example.com'));

// End testing Validator


// Start testing cache result
console.log(hundredTimes(1));
console.log(hundredTimes(1));
console.log(hundredTimes(2));
console.log(hundredTimes(2));
console.log(hundredTimes(1));
// End testing cache result
