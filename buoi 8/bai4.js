function kiemTraSoDoiXung(n) {
    let chuoiN = n.toString();
    let chuoiDaoNguoc = chuoiN.split('').reverse().join('');
    return chuoiN === chuoiDaoNguoc;
}


console.log(kiemTraSoDoiXung(121)); 
console.log(kiemTraSoDoiXung(123)); 