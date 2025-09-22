import { tambah, kurang, kali, bagi } from "./math.js";
import { keBesar, keKecil } from "./string.js";

console.log("20+5 =", tambah(20, 5));
console.log("30-10 =", kurang(30, 10));
console.log("6*7 =", kali(6, 7));
console.log("50/2 =", bagi(50, 2));

console.log(keBesar("halo dunia"));
console.log(keKecil("JAVASCRIPT"));
