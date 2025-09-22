export function cekGanjilGenap(angka) {
    return angka % 2 === 0 ? "Genap" : "Ganjil";
}

export function balikString(str) {
    return str.split("").reverse().join("");
}

export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
