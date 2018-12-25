
const orders = [500, 30, 99, 15, 223];


'Bad Loop Code 💩'

var total = 0;
var withTax = [];
var highValue = [];

console.time('bad-loop')
for (i = 0; i < orders.length; i++) { 

    // Reduce
    total += orders[i];

    // Map
    withTax.push(orders[i] * 1.07);

    // Filter
    if (orders[i] > 100) {
        highValue.push(orders[i])
    }
}
console.timeEnd('bad-loop')


console.time('good-loop')
'Good Loop Code ✅'
// Reduce
var total = orders.reduce((acc, cur) => acc + cur)

// Map
var withTax = orders.map(v => v * 1.1)

// Filter
var highValue = orders.filter(v => v > 100);
console.timeEnd('good-loop')

/**
 * Every
 * @returns false
 */
const everyValueGreaterThan50 = orders.every(v => v > 50)

/**
 * Every
 * @returns true
 */
const everyValueGreaterThan10 = orders.every(v => v > 10)


/**
 * Some
 * @returns false
 */
const someValueGreaterThan500 = orders.some(v => v > 500)

/**
 * Some
 * @returns true
 */
const someValueGreaterThan10 = orders.some(v => v > 10)



