let a = -2;
let b = 5;
let c = 3;

let D = (b ** 2 - 4 * a * c);

console.log(a +"x^2 "+ b +"x "+ c +'=0' );
console.log(`Дискримінан: ${D} `);
console.log(`X1: ${(-b + Math.sqrt(D)) / (2 * a)} `);
console.log(`X2: ${(-b - Math.sqrt(D)) / (2 * a)} `);

