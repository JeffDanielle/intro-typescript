/*
 !! OPTIONAL SUB OPTIMAL CODE BELOW !!
 Provide key value pairs if you want to explicitly define the properties of the object. this will allow
 us expect what properties will be return in an object
*/
// const person: {
//     name: string;
//     age: number;
// } = {
const person = {
    name: "Jeff",
    age: 24,
    hobbies: ["Beating my meat? 🥩", "Jogging 🏃‍♂️", "Video games 🎮"],
};

let favoriteActivities: string[];
favoriteActivities = ["Boxing 🥊"];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); !!! One of typescript advantage it let us know what is wrong.
}
