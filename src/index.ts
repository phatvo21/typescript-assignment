import { MyArray } from "./barebone";
import { myFunc } from "./arrow-function";
import {testRequest} from "./error-handle";
import {errorResponse, validator} from "./custom-response";

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

// The application shouldn't be able to compiler, if uncomment those there snippet below.

// const booleanAry = new MyArray();
// numberAry.add(true);
// numberAry.add(false);

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

// End testing Validator


// Start testing custom response

console.log(validator(() => errorResponse()).valid);
console.log(validator(() => errorResponse()).error);

// End custom response



