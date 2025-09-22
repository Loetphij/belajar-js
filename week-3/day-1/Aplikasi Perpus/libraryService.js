export async function getAllBooks() {
  const res = await fetch("./books.json");
  const data = await res.json();
  return data;
}

export let books = []
let id = 1
export function addBook(judul, penulis, tahun){
    let buku = { 
        id: id++,
        judul: judul,
        penulis: penulis,
        tahun: tahun,
    } 
    books.push(buku)
    console.log(books)
    console.log(`Buku ${buku.judul} telah ditambahkan.`)
}

export async function findBookByTitle(title) {
  const res = await fetch("./books.json");
  const data = await res.json();
  return data.find(b => b.judul.toLowerCase() === title.toLowerCase());
}
