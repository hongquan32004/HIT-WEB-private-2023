function timSoLonNhat(a, b, c) {
    let soLonNhat = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
    return soLonNhat;
}

console.log(timSoLonNhat(1, 2, 3)); 
console.log(timSoLonNhat(3, 4, 5)); 
console.log(timSoLonNhat(3, 4, 8)); 