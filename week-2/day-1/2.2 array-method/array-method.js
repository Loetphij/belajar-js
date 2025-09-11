// ---- Latihan Main ----

console.log("---- Latihan Main ----")
// Bikin array isi angka 1–10.
let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Pakai map buat kaliin semua angka dengan 5.
let kaliLima = angka.map(function(n){
    return n * 5
})
console.log(kaliLima)
// Pakai filter buat ambil angka genap.
let genap = angka.filter(function(n){
    return n % 2 === 0
})
console.log(genap)

// Pakai reduce buat jumlahin semua angka.
let jumlahSemua = angka.reduce(function(total, n){
    return total + n
})
console.log(jumlahSemua)

// Pakai find buat cari angka pertama yang lebih dari 8.
let cari = angka.find(function(n){
    return n > 8
})
console.log(cari)



// Studi Kasus

console.log("---- Studi Kasus ----")
// Ada daftar nama buah, terus cetak semua pakai forEach.
let buah = ["pisang", "apel", "jeruk", "stroberi", "alpukat"]
let daftar = buah.forEach(function(n){
    console.log(`Ini adalah buah ${n}`)
})

// Ada daftar harga barang, kalikan semua harga dengan 10% pakai map.
let hargaBarang = [10000, 15000, 20000, 25000, 30000]
let diskon = hargaBarang.map(function(n){
    return n * 0.1
})
console.log(diskon)

// Ada daftar umur orang, ambil yang umurnya lebih dari 17 pakai filter.
let umur = [16, 19, 20, 17, 18, 21]
let lebih17th = umur.filter(function(n){
    return n > 17
})
console.log(lebih17th)

// Ada daftar nilai ujian, jumlahkan semua nilai pakai reduce.
let nilai = [87, 96, 85, 70, 68, 69, 58, 79, 89, 96, 90, 75]
let jumlahNilai = nilai.reduce(function(total, n){
    return total + n
})
console.log(jumlahNilai)

// Ada daftar nomor kursi, cari kursi pertama yang lebih dari nomor 20 pakai find.
let noKursi = [16, 17, 18, 19, 20, 21, 22, 23]
let cariStlh20 = noKursi.find(function(n){
    return n > 20
})
console.log(cariStlh20)