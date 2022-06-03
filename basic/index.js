console.log("Node sample");
const sum=(a,b) => a+ b;
console.log(sum(10,20));
console.log(global.setTimeout(() => {
    console.log("hi");
    console.log("Welcome");
}, 5000))