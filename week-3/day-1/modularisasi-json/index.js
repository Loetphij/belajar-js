import { biodata } from "./biodata.js"
console.log("Biodata:", biodata)

import { tambah, kurang, kali, bagi } from "./math.js"
console.log("20 + 5 = ", tambah(20, 5))
console.log("30 - 10 = ", kurang(30, 10))
console.log("6 * 7 = ", kali(6, 7))
console.log("50 / 2 = ", bagi(50, 2))

import produk from "./produk.json" with { type: "json" }
produk.forEach(p => {
  console.log(`Produk: ${p.nama}, Harga: ${p.harga}`)
})

import { formatRupiah } from "./helper.js"

produk.forEach(p => {
  console.log(`Produk: ${p.nama}, Harga: ${formatRupiah(p.harga)}`);
})

import { addTask, getAllTasks, deleteTask } from "./taskService.js"
addTask("Nyuci baju")
addTask("Ngerjain tugas")
addTask("Beli perlengkapan")

getAllTasks()

deleteTask(2)

import { register, login } from "./auth.js"
register() 

import { getPosts } from "./postService.js";
let posts = await getPosts();
posts.slice(0, 5).forEach(p => console.log(p));

import nilai from "./nilai.json" with {type : "json"}
import { rataRata, nilaiTerendah, nilaiTertinggi } from "./statistik.js"
rataRata(nilai)
nilaiTerendah()
nilaiTertinggi()