function demSoKyTuTuCuoiCung(s) {
    var mangs = s.trim().split(/\s+/);

    var tuCuoiCung = mangs[mangs.length - 1].replace(/[,.]$/, '');

    var soKyTu = tuCuoiCung.length;

    return soKyTu;
}

console.log(demSoKyTuTuCuoiCung("Hello World"));
console.log(demSoKyTuTuCuoiCung("HTML, CSS, Javascript, ")); 