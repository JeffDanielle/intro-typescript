// Specify the types of the parameters/variable to expect a specific data type
// Key difference: JavaScript uses dynamic types resolved at run-time meanwhile TypeScript uses static types set during development
const add = (num1: number, num2: number) => {
    return num1 + num2;
};

const number1 = 3;
const number2 = 10;

console.log(add(number1, number2));
