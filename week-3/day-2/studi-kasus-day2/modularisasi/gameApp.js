import readline from "readline";
import { tebakAngka } from "./game.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const angkaRahasia = Math.floor(Math.random() * 10) + 1;

rl.question("Masukkan tebakan (1-10): ", (jawaban) => {
    const tebakan = parseInt(jawaban);
    console.log(tebakAngka(tebakan, angkaRahasia));
    console.log("Angka rahasia:", angkaRahasia);
    rl.close();
});
