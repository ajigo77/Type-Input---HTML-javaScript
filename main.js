let hargaAwal = prompt('Input harga awal (Rp)')
let hargaDiskon = prompt('Input harga diskon (%)')
let hargaAkhir = hargaAwal * hargaDiskon / 100
let hasil = hargaAwal - hargaAkhir

alert(`Hasil nya adalah Rp. ${hasil} anda berarti hemat Rp. ${hargaAkhir}`)