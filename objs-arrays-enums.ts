/*
 !! OPTIONAL SUB OPTIMAL CODE BELOW !!
 Provide key value pairs if you want to explicitly define the properties of the object. this will allow
 us expect what properties will be return in an object
*/
// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     // if type of data is identified, then tuple is recommended to help determine what kind of data is being handled(fixed-length array)
//     role: [number, string];
// } = {
//     name: "Jeff",
//     age: 24,
//     hobbies: ["Beating my meat? 🥩", "Jogging 🏃‍♂️", "Video games 🎮"],
//     role: [1, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// we can use enum instead of declaring every single variable with a value, helpful for identifiers
enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
}

// person.role.push("admin");
// person.role[0] = 10;

const person = {
    name: "Jeff",
    age: 24,
    hobbies: ["Beating my meat? 🥩", "Jogging 🏃‍♂️", "Video games 🎮"],
    role: Role.ADMIN,
};

/* let favoriteActivities: any[]; big disadvantage of typescript since it removes 
most of the advantages of typescript since it accepts any kind of data  */
let favoriteActivities: string[];
favoriteActivities = ["Boxing 🥊"];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); !!! One of typescript advantage it let us know what is wrong.
}

if (person.role === Role.AUTHOR) {
    console.log(person.role);
}
