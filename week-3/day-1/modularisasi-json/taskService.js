export let tasks = []
let id = 1
export function addTask(judul){
    let task = {
        id: id++,
        judul: judul
    }
    tasks.push(task)
    console.log(`----- Tambah Tugas -----`)
    console.table(tasks)
    console.log(`Tugas "${judul}" telah ditambahkan`)
}

export function getAllTasks(){
    console.log(`----- Daftar Tugas -----`)
    console.table(tasks)
}

export function deleteTask(id) {
    let i = tasks.findIndex (b => b.id === id)
    if (i === -1){
        console.log ("Tugas tidak ditemukan")
    return
    } 
    tasks.splice(i, 1)
    console.log("----- Hapus Tugas -----")
    console.table(tasks)
    console.log(`Tugas dengan id ${id} telah dihapus.`)
}
