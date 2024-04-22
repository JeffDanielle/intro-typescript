// Specify the types of the parameters/variable to expect a specific data type
// Key difference: JavaScript uses dynamic types resolved at run-time meanwhile TypeScript uses static types set during development
function add(num1: number, num2: number, showResult: boolean, phase: string) {
    if (showResult) {
        console.log(`${phase} ${num1 + num2}`);
        console.log(typeof phase, typeof num1, typeof num2);
    } else {
        return num1 + num2;
    }
}

const number1 = 3;
const number2 = 10;
const printResult = true;
const resultPhrase = "Result is:";

add(number1, number2, printResult, resultPhrase);
