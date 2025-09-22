import { tambahNama, hapusNama, tampilkanNama } from "./names.js";

tambahNama("Ali");
tambahNama("Bagas");
tambahNama("Cecep");

console.log("Daftar:", tampilkanNama());

hapusNama("Bagas");

console.log("Setelah dihapus:", tampilkanNama());
