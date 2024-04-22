//  Use pipe for union types '|' if we expected two or more data types
// Literal types are based on core types but with specific version: example(resultConversion)
function combine(
    input1: number | string,
    input2: number | string,
    resultConversion: "as-number" | "as-text"
) {
    let result;
    if (
        (typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number"
    ) {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    // if (resultConversion === "as-number") {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
    return result;
}

// Literal types
const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combineNames = combine("Max", "Anna", "as-text");
console.log(combineNames);
