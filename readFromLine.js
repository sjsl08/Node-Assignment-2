// //! import the readline
const { stdin, stdout } = require("process");
const readline = require("readline")

// //! create a new interface
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

// //! use the question prop of the new rl interface, USERNAME IS A CALLBACK
rl.question("Please enter your name: ",(USERNAME)=>{
    console.log(`Hello ${USERNAME}`);
    rl.close()  //? close the interface at the end
})






















// const arr = [];

// const rl = readline.createInterface({
//     input: stdin,
//     output: stdout
// })

// rl.question("size", async (size) => {
//     for (let index = 0; index < size; index++) {

//         await new Promise((resolve, reject) => {

//             rl.question("enter teh num : ", (num) => {
//                 arr.push(num)
//                 resolve()
//             })
//         })
//     }
//     console.log(arr);
//     rl.close()
// })