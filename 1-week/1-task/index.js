const lodash = require('lodash');

// sorting
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedNumbers = lodash.sortBy(numbers);
console.log(sortedNumbers);

// chunking
const chunkedNumbers = lodash.chunk(numbers, 3);
console.log(chunkedNumbers);

// Debounce function
const debounce = lodash.debounce(() => console.log('Hello'), 100);
debounce();
setInterval(debounce, 500);