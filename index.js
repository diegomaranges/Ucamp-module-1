let ar = [1, 2, 3, 4, 5];

console.log("-----------------------------------");

console.log(ar.length);
console.log(ar);

console.log("-----------------------------------");

console.log(ar.push(6123));
console.log(ar);

console.log("-----------------------------------");

console.log(ar.pop());
console.log(ar);

console.log("-----------------------------------");

console.log(ar.unshift(5154854));
console.log(ar);

console.log("-----------------------------------");

console.log(ar.shift());
console.log(ar);

console.log("-----------------------------------");

console.log(ar.splice(2, 2, 28));
console.log(ar);

console.log("-----------------------------------");

for (let i = 0; i < ar.length; i++) {
    console.log(ar[i]);    
}

console.log("-----------------------------------");

ar.forEach(element => {
    console.log(element);
});
