import users from "./users.json" with { type : "json"}
export function register(username, email, password){
    const exist = users.find(u => u.username === username)
    if (exist) {
        console.log("Username sudah terdaftar")
        return false
    }
    users.push({id: users.length + 1, username: username, email: email, password: password})
    console.log("Akun berhasil didaftarkan")
    
}

register("Pirozhkaa", "Pirozhkaa1907@gmail.com", "huouhouh987")

export function login(username, email, password){
    const exist = users.find(u => u.username === username)
    if (exist) {
        console.log("Username sudah terdaftar")
        return false
    }
    users.push({id: users.length + 1, username: username, email: email, password: password})
    console.log("Akun berhasil didaftarkan")
    
}

register("Pirozhkaa", "Pirozhkaa1907@gmail.com", "huouhouh987")





// export function register(username, password) {
//     if (!username) return alert("Username tidak boleh kosong!");

//     // cek kalau username sudah ada
//     if (usernames.includes(username)) {
//       return alert("Username sudah terdaftar!");
//     }

//     if (!password) return alert("Password tidak boleh kosong!");

//     usernames.push(username);
//     passwords.push(password);

//     alert("User berhasil didaftarkan!");
// }

// export function login(username, password) {
//     let index = usernames.indexOf(username);

//     if (index !== -1 && passwords[index] === password) {
//       alert("Login berhasil! Selamat datang, " + username);
//     } else {
//       alert("Login gagal! Username atau password salah.");
//     }
// }
// register()