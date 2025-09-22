import { tambahBuku, cariBuku, hapusBuku, tampilkanSemua } from "./book.js";

tambahBuku("Laskar Pelangi");
tambahBuku("Sang Pemimpi");
tambahBuku("Negeri 5 Menara");

console.log("Semua buku:", tampilkanSemua());
console.log("Cari 'Sang Pemimpi':", cariBuku("Sang Pemimpi"));

hapusBuku("Laskar Pelangi");
console.log("Setelah dihapus:", tampilkanSemua());
