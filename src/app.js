import isSenior, { isAdult, canDrink } from './person.js';

console.log('Running the application !!');

const age = 20;

if (isAdult(age)) {
    console.log('This Person is Adult.');
}
else
    console.log('This Person is not an Adult.');

if (canDrink(age)) {
    console.log('He can Drink.');
}
else {
    console.log('He cannot Drink.');
}

if(isSenior(age))
console.log('He is Senior.');
else    
console.log('He is not Senior.');


