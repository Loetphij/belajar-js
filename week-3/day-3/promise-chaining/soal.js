// 📌 Soal 1 – Ambil Data Berantai

// Buatlah tiga function getUser(), getPost(), dan getComment() yang masing-masing mengembalikan Promise dengan setTimeout.

// getUser() → setelah 1 detik kembalikan "User ditemukan".
function getUser(){
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve("User ditemukan") 
    }, 1000)
})} 

// getPost() → setelah 1 detik kembalikan "Post ditemukan".
function getPost(){ 
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve("Post ditemukan") 
    }, 1000)
})} 

// getComment() → setelah 1 detik kembalikan "Komentar ditemukan".
function getComment(){
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve("Komentar ditemukan") 
    }, 1000)
})} 

// Gunakan Promise chaining agar outputnya muncul berurutan:
getUser()
    .then((res) => {
        console.log(res);
        return getPost();
    })
    .then((res) => {
        console.log(res);
        return getComment();
    })
    .then((res) => {
        console.log(res);
    });

// User ditemukan
// Post ditemukan
// Komentar ditemukan

// 📌 Soal 2 – Kalkulasi Matematika

// Buatlah dua function yang mengembalikan Promise:
// tambah(x, y) → hasil penjumlahan
function tambah(x, y){
    return new Promise((resolve) => {resolve(x + y)})
}

// kali(x, y) → hasil perkalian
function kali(x, y){
    return new Promise((resolve) => {resolve(x * y)})
}

// Gunakan chaining untuk menghitung langkah berikut:
// Tambah 5 + 7
// Kali hasilnya dengan 3
tambah(5, 7)
    .then((res) => {
        console.log(`Hasil jumlah : ${res}`)
        return kali(res, 3)
    })
    .then((res) => {
        console.log(`Hasil kali : ${res}`)
    });

// Tampilkan hasil akhir di console

// 📌 Soal 3 – Validasi Input

// Buatlah dua function yang mengembalikan Promise:
// cekNama(nama) → resolve "Nama valid" jika tidak kosong, reject jika kosong.
function cekNama(nama) {
    return new Promise((resolve, reject) => {
        if (nama && nama.trim() !== "") {
            resolve("Nama valid");
        } else {
            reject("Nama tidak boleh kosong");
        }
    });
}


// Uji validasi
cekNama("Danz")
    .then((res) => {
        console.log(res);
        return cekEmail("danz@example.com");
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error("Error:", err);
    });

// cekEmail(email) → resolve "Email valid" jika ada tanda "@", reject jika tidak ada.
function cekEmail(email) {
    return new Promise((resolve, reject) => {
        if (email.includes("@")) {
            resolve("Email valid");
        } else {
            reject("Email tidak valid");
        }
    });
}

// Gunakan Promise chaining untuk memvalidasi:

// Nama = "Danz"
// Email = "danz@example.com"

// Tampilkan hasil validasi di console. Jika ada error, tangani dengan .catch().

// 📌 Soal 4 – Simulasi Belanja Online

// Buatlah tiga function berbasis Promise dengan setTimeout:

// login() → kembalikan "Login berhasil" setelah 1 detik.

// pilihBarang() → kembalikan "Barang dipilih" setelah 1 detik.

// bayar() → kembalikan "Pembayaran sukses" setelah 1 detik.

// Gunakan Promise chaining agar console menampilkan urutan proses belanja.

// 📌 Soal 5 – Progress Loading

// Buatlah function progress(step) yang mengembalikan Promise dengan setTimeout, hasilnya berupa string:

// "Progress: <step>%"


// Gunakan chaining untuk menampilkan:

// Progress: 25%
// Progress: 50%
// Progress: 75%
// Progress: 100%
// Selesai!


// 👉 Semua soal di atas wajib menggunakan Promise dan Chaining (.then()), bukan async/await.