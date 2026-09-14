
// ===============================
// STRING MANIPULATION FUNCTIONS
// ===============================

// 1. Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
// Output: olleh


// 2. Count Characters
function countCharacters(str) {
    return str.length;
}

console.log(countCharacters("hello"));
// Output: 5


// 3. Capitalize Words
function capitalizeWords(sentence) {
    let words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    return words.join(" ");
}

console.log(capitalizeWords("hello world"));
// Output: Hello World


// ===============================
// ARRAY FUNCTIONS
// ===============================

// 4. Find Maximum
function findMaximum(array) {
    return Math.max(...array);
}

console.log(findMaximum([3, 7, 2, 9, 4]));
// Output: 9


// 5. Find Minimum
function findMinimum(array) {
    return Math.min(...array);
}

console.log(findMinimum([3, 7, 2, 9, 4]));
// Output: 2


// 6. Sum of Array
function sumArray(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }

    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));
// Output: 15


// 7. Filter Array
function filterArray(array) {
    return array.filter(function(number) {
        return number > 5;
    });
}

console.log(filterArray([2, 6, 3, 8, 10, 4]));
// Output: [6, 8, 10]


// ===============================
// MATHEMATICAL FUNCTIONS
// ===============================

// 8. Factorial
function factorial(number) {
    let result = 1;

    for (let i = 1; i <= number; i++) {
        result = result * i;
    }

    return result;
}

console.log(factorial(5));
// Output: 120


// 9. Prime Number Check
function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7));
// Output: true

console.log(isPrime(10));
// Output: false


// 10. Fibonacci Sequence
function fibonacci(terms) {
    let sequence = [0, 1];

    for (let i = 2; i < terms; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }

    return sequence.slice(0, terms);
}

console.log(fibonacci(7));
// Output: [0, 1, 1, 2, 3, 5, 8]
