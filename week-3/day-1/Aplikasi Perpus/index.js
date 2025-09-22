import { getAllBooks, addBook, findBookByTitle, } from "./libraryService.js";

addBook("Kiai Penggerak", "Haidar Musyafa", 2022)
addBook("Bliss Bakery", "Katheryn Littlewood", 2012)
getAllBooks().then(books=> console.log("Semua Buku:", books));
findBookByTitle("Kiai Penggerak").then(book => console.log("Cari:", book));
