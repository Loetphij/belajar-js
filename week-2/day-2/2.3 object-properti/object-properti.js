// Akses properti
console.log("----- Akses properti -----")
// Buat object mobil dengan properti merk dan warna. Tampilkan merk.
let mobil = {
    merk: "kijang",
    warna: "hijau",
}
console.log(mobil.merk)

// Buat object siswa dengan properti nama dan kelas. Tampilkan kelas.
let siswa = {
    nama: "Lutpi gwehj",
    kelas: "X"
}
console.log(siswa.kelas)

// Buat object hewan dengan properti jenis dan umur. Tampilkan jenis.
let hewan = {
    jenis: "burung",
    umur: 2
}
console.log(hewan.jenis)

// Buat object film dengan properti judul dan tahun. Tampilkan tahun.
let film = {
    judul: "Napoleon",
    tahun: 1970
}
console.log(film.tahun)

// Buat object akun dengan properti username dan password. Tampilkan username.
let akun = {
    username: "Pirozhkaa",
    password: "admin1234"
};
console.log(akun.username)


// Menambahkan Properti
console.log("----- Menambahkan Properti -----")
// Tambahkan properti harga pada object mobil.
mobil.harga = 70000000;
console.log(mobil)

// Tambahkan properti alamat pada object siswa.
siswa.alamat = {
    jalan: "Jl. Bima 2 no 7A",
    desa: "Pendem",
    kecamatan: "Junrejo",
    kota: "Batu",
    provinsi: "Jawa Timur"
};
console.log(siswa)

// Tambahkan properti makanan pada object hewan.
hewan.makanan = "biji-bijian";
console.log(hewan)

// Tambahkan properti genre pada object film.
film.genre = ["perang", "action", "sejarah"]
console.log(film)

// Tambahkan properti email pada object akun.
akun.email = "pirozhkaa12@gmail.com"
console.log(akun)



// Mengubah Nilai Properti
console.log("----- Mengubah Nilai Properti -----")
// Ubah warna mobil jadi "hitam".
mobil.warna = "hitam";
console.log(mobil)

// Ubah kelas siswa jadi "XI".
siswa.kelas = "XI"
console.log(siswa)

// Ubah umur hewan jadi 5.
hewan.umur = 5
console.log(hewan)

// Ubah tahun film jadi 2024.
film.tahun = 2024
console.log(film)

// Ubah password akun jadi "rahasia123".
akun.password = "rahasia123"
console.log(akun)



// Menghapus Properti
// Hapus harga dari mobil.
delete mobil.harga;
console.log(mobil)

// Hapus alamat dari siswa.
delete siswa.alamat;
console.log(siswa)

// Hapus makanan dari hewan.
delete hewan.makanan;
console.log(hewan)

// Hapus genre dari film.
delete film.genre;
console.log(film)

// Hapus email dari akun.
delete akun.email;
console.log(akun)



// Looping pada Object
console.log("----- Looping pada Object -----")
// Loop semua isi mobil.
for (let key in mobil) {
  console.log(key + " : " + mobil[key]);
}

// Loop semua isi siswa.
for (let key in siswa) {
  console.log(key + " : " + siswa[key]);
}

// Loop semua isi hewan.
for (let key in hewan) {
  console.log(key + " : " + hewan[key]);
}

// Loop semua isi film.
for (let key in film) {
  console.log(key + " : " + film[key]);
}

// Loop semua isi akun.
for (let key in akun) {
  console.log(key + " : " + akun[key]);
}


// Latihan Mandiri
console.log("----- Latihan Mandiri -----")
// Buat object buku dengan properti: judul, pengarang, tahunTerbit.
let buku = {
    judul: "Laut Bercerita",
    pengarang: "Leila S. Chudori",
    tahunTerbit: 2016
}
// Tambahkan properti penerbit.
buku.penerbit = "Gramedia"
console.log(buku)

// Ubah nilai tahunTerbit.
buku.tahunTerbit = 2017
console.log(buku)

// Hapus pengarang.
delete buku.pengarang
console.log(buku)

// Tampilkan semua isi object dengan looping.
for (let key in buku) {
    console.log(`${key} : ${buku[key]}`)
}



// Evaluasi Harian (Studi Kasus Besar)
console.log("----- Evaluasi Harian -----")
// Buat program bukuFavorit yang:
//  - Menyimpan judul, pengarang, tahunTerbit.
let bukuFavorit = {
    judul: "Bliss Bakery",
    pengarang: "Kathryn Littlewood",
    tahunTerbit: 2013
}
console.log(bukuFavorit)

//  - Menambah properti penerbit.
bukuFavorit.penerbit = "Mizan Fantasi"
console.log(bukuFavorit)

//  - Mengubah tahunTerbit.
bukuFavorit.tahunTerbit = 2014
console.log(bukuFavorit)

//  - Menghapus pengarang.
delete buku.pengarang
console.log(bukuFavorit)

//  - Menampilkan semua isi object.
for (let key in bukuFavorit) {
    console.log(`${key} : ${bukuFavorit[key]}`)
}
