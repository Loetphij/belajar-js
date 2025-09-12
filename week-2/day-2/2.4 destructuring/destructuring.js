// Destructuring Array
console.log("----- Destructing Array -----")
// Ambil nilai dari array [10, 20, 30] jadi variabel x, y, z.
let arrAngka = [10, 20, 30]
let [x, y, z] = arrAngka
console.log(x)
console.log(z)

// Ambil nilai pertama dan kedua dari array ["apel", "jeruk", "mangga"].
let arrBuah = ["apel", "jeruk", "mangga"]
let [a, b, c] = arrBuah
console.log(a, b)

// Ambil nilai pertama dan sisanya dari array [5, 6, 7, 8].
let angka = [5, 6, 7, 8]
let [k, l, m, n] = angka
console.log(k)
console.log(l, m, n,)

// Destructuring array [100, 200] jadi satu dan dua.
let array = [100, 200]
let [satu, dua] = array
console.log(satu, dua)

// Destructuring array [true, false, true] jadi t1, t2, t3.
let arry = [true, false, true]
let [t1, t2, t3] = arry
console.log(t1, t2)


// Destructuring Object
console.log("----- Destructing Object -----")
// Sama kayak array, tapi buat object (pakai nama property).

// let mobil = { merek: "Toyota", tahun: 2020 };
// let { merek, tahun } = mobil;

// console.log(merek); // Toyota
// console.log(tahun); // 2020
// 📝 Studi Kasus
// Destructuring object { nama: "Budi", umur: 17 }.
let siswa1 = {nama: "Budi", umur: 17}
let {nama1, umur} = siswa1
console.log(nama1)
console.log(umur)

// Ambil judul dan pengarang dari object { judul: "Buku A", pengarang: "Andi" }.
let buku = {judul: "Buku Anjay", pengarang: "Andi"}
let {judul, pengarang} = buku
console.log(judul)
console.log(pengarang)
// Ambil merk dari object { merk: "Honda", warna: "merah" }.
let motor = {merk: "Honda", warna: "merah"}
let {merk, warna} = motor
console.log(merk, warna)

// Destructuring { username: "danz", password: "123" }.
let akun = {username: "danz", password: "123"}
let {username, password} = akun
console.log(username, password)

// Ambil nama dan kelas dari { nama: "Siti", kelas: "XI" }.
let siswa2 = {nama: "Siti", kelas: "XI"}
let {nama2, kelas} = siswa2


// 🌟 Spread Operator (...)
console.log("----- Spread Operator -----")
// Spread itu kayak nyebarin isi kotak.
// Biasanya dipake buat gabung array atau copy object.

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let gabung = [...arr1, ...arr2];

// console.log(gabung); // [1,2,3,4]
// 📝 Studi Kasus
// Gabungkan [1, 2] dengan [3, 4].
let array1 = [1, 2];
let array2 = [3, 4];
let gabung = [...array1, ...array2];
console.log(gabung)

// Copy array [10, 20, 30] ke array baru.
let oldArray = [10, 20, 30]
let newArray = [...oldArray]
console.log(newArray)

// Gabungkan object { a: 1 } dengan { b: 2 }.
let object1 = {a:1}
let object2 = {b:2}
let gabungObject = {...object1,...object2}
console.log(gabungObject)

// Spread array [5, 6, 7] ke console.log.


// Gabungkan array ["a", "b"] dan ["c", "d"].
let firstArray = ["a", "b"]
let secondArray = ["c", "d"]
let mergeArray = [...firstArray, ...secondArray]
console.log(mergeArray)

// 🍩 Rest Operator (...)
console.log("----- Rest Operator -----")
// Rest itu kebalikan spread: ngumpulin sisa isi.

// function jumlah(...angka) {
//   return angka.reduce((total, n) => total + n, 0);
// }

// console.log(jumlah(1, 2, 3, 4)); // 10
// 📝 Studi Kasus
// Buat function tambah yang bisa nerima banyak angka.
function jumlah(...Angka){
    return Angka.reduce((total, n) => total + n, 0)
}
console.log(jumlah(10, 20, 30, 40, 50))

// Buat function cetak yang nerima banyak string dan print satu-satu.
function cetak(...teks) {
  teks.forEach(item => {console.log(item);});
}

cetak("Halo", "kamu", "lagi","ngapain");

// Buat function kalikan semua angka yang masuk.
function kalikan(...Angka){
    return Angka.reduce((total, n) => total * n)
}
console.log(kalikan(15, 27, 31, 42))

// Buat function gabungKalimat yang nerima banyak kata jadi 1 kalimat.
function gabungKalimat(...kata) {
  return kata.reduce((kalimat, kataBaru) => `${kalimat} ${kataBaru}`);
}

console.log(gabungKalimat("Halo", "kamu", "lagi", "ngapain"));

// Buat destructuring array [1,2,3,4,5] jadi awal dan ...sisa.
let [awal, ...sisa] = [1, 2, 3, 4, 5];
console.log(awal);
console.log(sisa); 


// 🎯 Latihan Mandiri (Gabungan)
console.log("----- Latihan Mandiri -----")
// Gunakan destructuring array untuk ambil nilai [1, 2, 3, 4].
let nilai = [1, 2, 3, 4];
let [p, q, r, s] = nilai;
console.log(p)
console.log(r)

// Buat object mobil dan destructuring merek dan tahun.
let mobil = {merek: "Kijang", tahun: "2006"}
let {merek, tahun} = mobil
console.log(merek, tahun)

// Gabungkan dua array pakai spread operator.
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6,7, 8, 9, 10]
let mergeArr = [...arr1, ...arr2]
console.log(mergeArr)

// Buat function yang nerima banyak angka lalu jumlahkan pakai rest.
function tambah(...number){
    return number.reduce((total, n) => total + n, 0)
}
console.log(tambah(10, 20, 30, 40, 50))


// Evaluasi Harian (Studi Kasus Besar)
console.log("----- Evaluasi Harian -----")
// Buat program dataSiswa:
// Object { nama: "Dewi", umur: 16, kelas: "XI" }.
let dataSiswa = {nama: "Dewi", umur: 16, Kelas:"XI"}
// Pisahkan nama dan kelas dengan destructuring.
let {nama, usia, Kelas} = dataSiswa
// Tambahkan properti baru hobi pakai spread.
let hobi = {hobi: "Melukis, Musik"}
// Buat function yang menerima nilai ujian (banyak angka) lalu hitung totalnya dengan rest.
function tambah(...nilaiUjian){
    return nilaiUjian.reduce((total, n) => total + n, 0)
}
let jumlahNilaiUjian = {nilai: (tambah(89, 85, 75, 92, 50, 74, 95))}
let dataSiswaNew = [dataSiswa, hobi, jumlahNilaiUjian]
// Tampilkan hasil akhir ke console.
console.log(dataSiswaNew)