function timUCLN(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function timBCNN(a, b) {
    return (a * b) / timUCLN(a, b);
}

console.log(timUCLN(10,20));
console.log(timBCNN(10,20));