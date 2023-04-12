function sum(num1, num2) {
    if (num1 > 0 && num2 > 0) {
        return num1 + num2;
    } else {
        console.log("number1 or number2 negative");
    }
}
console.log(sum(2, 4));
console.log(sum(2, -4));
console.log(sum(-2, -4));