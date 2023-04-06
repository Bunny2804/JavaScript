let n = 100;
for (let i = 1; i < n ; i++) {
    let isSimple = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0 ) {
            isSimple = false;
        }
    }
    if (isSimple) {
        console.log(i)
    }
}