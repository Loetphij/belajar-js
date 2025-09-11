// Buat sebuah array of object bernama menu yang berisi minimal 5 makanan.
// Tiap object punya property:

// nama (string)
// kategori (string, contoh: "makanan", "minuman")
// harga (number)
// Gunakan forEach untuk menampilkan semua menu dengan format:
let menu = [
    {Nama: "Steak Ayam", Kategori:"Makanan", Harga: 35000},
    {Nama: "Ayam Bakar", Kategori: "Makanan", Harga: 30000},
    {Nama: "Nasi Goreng", Kategori: "Makanan", Harga: 20000},
    {Nama: "Mie Aceh", Kategori: "Makanan", Harga: 25000},
    {Nama: "Tahu Crispy", Kategori: "Snack", Harga: 15000},
    {Nama: "Es Sirup", Kategori: "Minuman", Harga: 15000},
    {Nama: "Es Teh", Kategori: "Minuman", Harga: 8000},
]
menu.forEach(item => {
    console.log(`Nama: ${item.Nama} | Kategori: ${item.Kategori} | Harga: ${item.Harga}`)
})
// Gunakan filter untuk mencari semua makanan/minuman dengan harga di bawah Rp30.000.
let murah = menu.filter(item => item.Harga < 30000)
console.log(murah)

// Gunakan map untuk membuat array baru yang hanya berisi nama-nama menu.
let nama2Menu = menu.map(item => item.Nama);
console.log(nama2Menu)

// Gunakan reduce untuk menghitung total harga semua menu.
let bayar = menu.reduce((total, item) => total + item.Harga, 0)
console.log(`Total harga adalah: ${bayar}`)

// Gunakan find untuk mencari satu menu dengan nama tertentu (misal: "Es Teh").
let cariMenu = menu.find(item => item.Nama == "Es Teh")
console.log(cariMenu)

// Gunakan destructuring array untuk mengambil 2 makanan pertama dari menu ke variabel makanan1 dan makanan2.
let [makanan1, makanan2, makanan3, makanan4, snack1, minuman1, minuman2] = menu;
console.log(makanan1, makanan2, snack1, minuman1)

// Gunakan destructuring object untuk mengambil nama dan harga dari salah satu menu (misal menu[0]).
let {Nama, Harga} = menu[0]
console.log(Nama, Harga)