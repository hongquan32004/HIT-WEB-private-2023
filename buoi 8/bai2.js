function kiemTraTamGiac(a, b, c) {
    if (a>0 && b > 0&& c>0 && a + b > c && a + c > b && b + c > a) {
        return true; 
    } else {
        return false; 
    }
}

console.log(kiemTraTamGiac(3, 4, 5)); 
console.log(kiemTraTamGiac(3, 4, 8)); 