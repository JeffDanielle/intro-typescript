// Unknown dataType
// Unknown is a better type for any data type since it restricts the possible data types but it needed additional conditional checking
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
// userName = userInput;

if (typeof userInput === "string") {
    userName = userInput;
}

// never dataType, often used to throw an exception
function generateError(message: string, code: number): never {
    throw {message, errorCode: code};
}

generateError("An error occurred!", 500);
