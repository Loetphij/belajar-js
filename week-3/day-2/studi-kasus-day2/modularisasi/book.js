let books = [];

export function tambahBuku(judul) {
    books.push(judul);
}

export function cariBuku(judul) {
    return books.find(b => b === judul);
}

export function hapusBuku(judul) {
    books = books.filter(b => b !== judul);
}

export function tampilkanSemua() {
    return books;
}
