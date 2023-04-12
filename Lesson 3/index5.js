function dob(num1, num2) {
    if (num1 % 2 == 0 && num2 % 2 == 0) {
        return num1 * num2;
    } else {
        console.log("unmatched");
    }
}
console.log(dob(3, 2));
