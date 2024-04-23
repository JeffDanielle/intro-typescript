function adds(n1: number, n2: number) {
    return n1 + n2;
}

// Void function dataType which does not return anything
function printResults(num: number) {
    console.log("Result: " + num);
}

// Function callbacks
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResults(adds(5, 12));

// Function dataType
// let combineValues: Function;
// Each parameter is a number and the function returns a number
let combineValues: (a: number, b: number) => number;

combineValues = adds;

// combineValues = 5;
console.log(combineValues(8, 8));
//  let someValue: undefined

addAndHandle(10, 20, (weh) => {
    console.log(weh);
});
