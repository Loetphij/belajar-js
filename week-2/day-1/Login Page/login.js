 // Array untuk simpan username & password
    let usernames = [];
    let passwords = [];

    // CREATE - Register User
    function register() {
      let username = prompt("Masukkan username baru:");
      if (!username) return alert("Username tidak boleh kosong!");

      // cek kalau username sudah ada
      if (usernames.includes(username)) {
        return alert("Username sudah terdaftar!");
      }

      let password = prompt("Masukkan password:");
      if (!password) return alert("Password tidak boleh kosong!");

      usernames.push(username);
      passwords.push(password);

      alert("User berhasil didaftarkan!");
    }

    // LOGIN - Cek username & password
    function login() {
      let username = prompt("Masukkan username:");
      let password = prompt("Masukkan password:");

      let index = usernames.indexOf(username);

      if (index !== -1 && passwords[index] === password) {
        alert("Login berhasil! Selamat datang, " + username);
      } else {
        alert("Login gagal! Username atau password salah.");
      }
    }

    // READ - Tampilkan semua user
    function showUsers() {
      if (usernames.length === 0) {
        alert("Belum ada user yang terdaftar.");
      } else {
        let data = "Daftar User:\n";
        for (let i = 0; i < usernames.length; i++) {
          data += (i+1) + ". " + usernames[i] + " (password: " + passwords[i] + ")\n";
        }
        alert(data);
      }
    }

    // UPDATE - Ubah password user
    function updateUser() {
      let username = prompt("Masukkan username yang ingin diupdate:");
      let index = usernames.indexOf(username);

      if (index === -1) {
        alert("Username tidak ditemukan!");
      } else {
        let newPassword = prompt("Masukkan password baru:");
        passwords[index] = newPassword;
        alert("Password user " + username + " berhasil diupdate!");
      }
    }

    // DELETE - Hapus user berdasarkan username
    function deleteUser() {
      let username = prompt("Masukkan username yang ingin dihapus:");
      let index = usernames.indexOf(username);

      if (index === -1) {
        alert("Username tidak ditemukan!");
      } else {
        usernames.splice(index, 1);
        passwords.splice(index, 1);
        alert("User " + username + " berhasil dihapus!");
      }
    }