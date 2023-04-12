function number(num1, num2) {
    if (num1 > 0 && num2 > num1) {
        return num1;
    } else if (num2 > 0 && num1 > num2) {
        return num2;
    } else {
        console.log("negative");
    }
}
console.log(number(-45, 24));
