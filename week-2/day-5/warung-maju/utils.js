// Import data barang
import barang from "./barang.js";

// 1. Tambah barang baru
export function tambahBarang(barangBaru) {
  return [...barang, barangBaru]
}

// 2. Cari barang berdasarkan nama
export function cariBarang(nama) {
  return barang.find(item => item.nama ==  "Kopi")
}

// 3. Hitung total harga belanjaan
export function hitungTotal(belanjaan) {
  return belanjaan.reduce(function(total, id) {
    let item = barang.find(function(b) {
      return b.id === id;
    });
    return total + (item ? item.harga : 0);
  }, 0);
}

// 4. Update stok barang
export function updateStok(id, jumlahBeli) {
  // cari barang sesuai id
  let item = barang.find(function(b) {return b.id === id;});
  let { stok } = item;
  item.stok = stok - jumlahBeli;

  return item;
}


