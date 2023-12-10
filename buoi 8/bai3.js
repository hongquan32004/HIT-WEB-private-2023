function demSoKyTuTuCuoiCung(s) {
    let mangs = s.trim().split(/\s+/);

    let tuCuoiCung = mangs[mangs.length - 1].replace(/[,.]$/, '');

    let soKyTu = tuCuoiCung.length;

    return soKyTu;
}

console.log(demSoKyTuTuCuoiCung("Hello World"));
console.log(demSoKyTuTuCuoiCung("HTML, CSS, Javascript, ")); 