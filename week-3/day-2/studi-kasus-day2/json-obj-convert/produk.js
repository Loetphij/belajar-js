const produk = [
  { id: 1, nama: "Buku", harga: 20000 },
  { id: 2, nama: "Pensil", harga: 3000 }
];
const json = JSON.stringify(produk);
const parsed = JSON.parse(json);
console.log(parsed);
