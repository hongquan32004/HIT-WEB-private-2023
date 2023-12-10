function kiemTraSoDoiXung(n) {
    var chuoiN = n.toString();
    var chuoiDaoNguoc = chuoiN.split('').reverse().join('');
    return chuoiN === chuoiDaoNguoc;
}


console.log(kiemTraSoDoiXung(121)); 
console.log(kiemTraSoDoiXung(123)); 