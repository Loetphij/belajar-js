// ----- Latihan Mandiri -----
// 1. Buat array berisi 5 nama temanmu.
let teman = ["Devan", "Mavi", "Hamdan", "Pasha", "Rasendria"]

// 2. Tambahin 1 nama di depan dan di belakang.
teman.push("Nizar")
teman.unshift("Hylmi")

// 3. Hapus 1 nama dari depan dan belakang.
teman.pop()
teman.shift()

// 4. Selipin nama baru di posisi ke-2.
teman.slice(1, 0, "Faiz")

// 5. Hitung berapa jumlah teman sekarang pakai .length.
console.log(teman.length)
console.log(teman)


// ----- Studi Kasus (per materi) -----

// push() & unshift()
// 1. Kamu punya array buah, tambahin 2 buah baru di depan dan belakang.
let buah = ["apel", "stroberi", "jeruk"]
buah.push("pisang")
buah.unshift("salak")
console.log(buah)

// 2. Kamu bikin array daftar belanja, masukin barang baru yang baru aja kamu ingat.
let daftarBelanja = ["gula", "garam", "kecap"]
daftarBelanja.push("royco", "telur")
console.log(daftarBelanja)

// 3. Kamu punya array hewan peliharaan, tambahin hewan baru di depan.
let hewanPeliharaan = ["kucing", "meong", "cat"]
hewanPeliharaan.unshift("iwak lele :D", "iwak cupang")
console.log(hewanPeliharaan)

// 4. Kamu punya array film favorit, tambahin film terbaru.
let filmFavourites = ["La révolution française", "Waterloo", "Union of Salvation"]
filmFavourites.push("Sang Pencerah", "Sang Kyai")
console.log(filmFavourites)

// 5. Kamu punya array angka, masukin angka 0 di awal.
let angka = [1, 2, 3, 4, 5]
angka.unshift(0)
console.log(angka)

// pop() & shift()
// 1. Kamu punya array mainan, buang mainan terakhir karena rusak.
let mainan = ["pesawat", "catur", "rubik", "tank"]
mainan.pop()
console.log(mainan)

// 2. Kamu punya array baju, buang baju paling depan karena kotor.
let baju = ["putih-abu", "batik", "hw"]
baju.shift()
console.log(baju)

// 3. Kamu punya array makanan, makan makanan terakhir (hapus terakhir).
let makanan = ["mie-ayam", "bakso", "lalapan"]
makanan.pop()
console.log(makanan)

// 4. Kamu punya array tugas sekolah, hapus tugas pertama karena udah selesai.
let tugasSekolah = ["mtk", "ipa", "ips", "bhs-indo"]
tugasSekolah.shift()
console.log(tugasSekolah)

// 5. Kamu punya array daftar antrian, hapus orang pertama (udah dilayani).
let daftarAntrian = ["beat", "vario", "mio", "supra"]
daftarAntrian.shift()
console.log(daftarAntrian)


// length (Hitung Isi)
// 1. Hitung jumlah buah di array.
console.log(buah.length)

// 2. Hitung jumlah teman di array.
console.log(teman.length)

// 3. Hitung jumlah angka di array.
console.log(angka.length)

// 4. Hitung jumlah barang di daftar belanja.
console.log(daftarAntrian.length)

// 5. Hitung jumlah hewan di array.
console.log(hewanPeliharaan.length)


// splice() (Sisip/Hapus di Tengah)
// 1. Kamu punya array warna ["merah", "kuning", "hijau"], sisipkan "biru" di posisi ke-2.
let warna = ["merah", "kuning", "hijau"]
warna.splice(1, 0, "biru")
console.log(warna)

// 2. Kamu punya array teman, hapus teman di posisi ke-3.
teman.splice(2, 1)
console.log(teman)

// 3. Kamu punya array angka [1,2,3,4,5], hapus angka 3 dan ganti dengan 30.
let angkaManeh = [1, 2, 3, 4, 5]
angkaManeh.splice(2, 1)
angkaManeh.splice(2, 0, 30)
console.log(angkaManeh)

// 4. Kamu punya array makanan, tambahin makanan baru di tengah.
makanan.splice(1, 0, "nasi-padang")
console.log(makanan)

// 5. Kamu punya array benda ["buku", "pensil", "penghapus"], ganti "pensil" jadi "pulpen".
let benda = ["buku", "pensil", "penghapus"]
benda.splice(1, 1)
benda.splice(1, 0, "pulpen")
console.log(benda)


// Kombinasi Semua
// 1. Buat array daftar belanja, tambahin barang, hapus barang, terus hitung jumlah barang.
let belanja = ["gula", "garam", "bawang merah"]
belanja.push("kecap")
belanja.shift()
belanja.length
console.log(belanja)

// 2. Buat array hewan peliharaan, masukin hewan baru, hapus hewan lama, lalu selipin hewan baru di tengah.
let peliharaan = ["kucing", "burung beo", "ikan koi"]
peliharaan.push("iguana")
peliharaan.pop() // mati dimakan kucing 💔
peliharaan.splice(1, 0, "biawak") 
console.log(peliharaan)

// 3. Buat array angka, tambahin angka baru di akhir, buang angka awal, lalu cek jumlahnya.
let Angka = [0, 1, 2, 3, 4, 5]
Angka.shift()
Angka.push(6)


// 4. Buat array teman, tambahin teman baru di awal, hapus teman terakhir, lalu ganti teman ke-2 pakai nama lain.
let Teman = ["Budi", "Cindy", "Dedi", "Effendi"]
Teman.unshift("Andi") // anggota sirkel barw
Teman.pop() // pindah syrckel 💔
Teman.splice(1, 1)
Teman.splice(1, 0, "Cecep") // pertukaran member :D
console.log(Teman)

// 5. Buat array makanan, tambahin makanan, hapus makanan, selipin makanan, terus tampilkan semua.
let panganan = ["quetan", "dadarre goulon", "lemperre", "lapuis leguit"] // actually those are ketan, dadar gulung, lemper, lapis legit. But spelled french-ly
panganan.shift()
panganan.push("craque telorre") // ts is kerak telor, but frenchly
panganan.splice(1, 0, "tahou choumedanne") // also ts is tahu sumedang. yes. frenchly