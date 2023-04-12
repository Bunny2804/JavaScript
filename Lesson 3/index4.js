function fuctor (n) {
    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial = factorial * i;
    }
    console.log(factorial)
}

fuctor(4)