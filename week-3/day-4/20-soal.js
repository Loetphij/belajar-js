// 1. Ambil data user dari API publik
async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!response.ok) {
      throw new Error("Gagal mengambil data API");
    }

    const data = await response.json();
    console.log("Nama user:", data.name);
  } catch (error) {
    console.error("Terjadi error:", error.message);
  }
}

getUser();

// Ambil daftar post, cek jumlahnya
async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Gagal mengambil data");
    }

    const posts = await response.json();

    if (posts.length > 50) {
      console.log("Post banyak sekali");
    } else {
      console.log("Jumlah post:", posts.length);
    }
  } catch (error) {
    console.error("Terjadi error:", error.message);
  }
}

getPosts();

// Promise manual dengan setTimeout
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

// Async function untuk menunggu
async function runDelay() {
  console.log("Tunggu 2 detik...");
  await delay(2000); 
  console.log("Selesai menunggu");
}

runDelay();

// Fetch dengan URL salah
async function getWrongAPI() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/abcxyz");

    if (!response.ok) {
      throw new Error("Gagal mengambil data API");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Gagal mengambil data API");
  }
}

getWrongAPI();

// Cek status API
async function checkAPI() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    if (!response.ok) {
      throw new Error("API tidak bisa diakses");
    }

    const data = await response.json();
    console.log("Data berhasil diambil:", data);
  } catch (error) {
    console.error("Terjadi error:", error.message);
  }
}

checkAPI();

// Promise.all
async function getUsersAndPosts() {
  try {
    const [usersRes, postsRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts")
    ]);

    if (!usersRes.ok || !postsRes.ok) {
      throw new Error("Salah satu API gagal diakses");
    }

    const users = await usersRes.json();
    const posts = await postsRes.json();

    console.log("Hasil array:", [users, posts]);
  } catch (error) {
    console.error("Terjadi error:", error.message);
  }
}
// Chaining Promise5
const angkaPromise = Promise.resolve(5);

angkaPromise
  .then((num) => {
    console.log("Awal:", num);
    return num * 2;
  })
  .then((num) => {
    console.log("Setelah dikali 2:", num);
    return num * 3;
  })
  .then((num) => {
    console.log("Setelah dikali 3:", num);
  })
  .catch((error) => {
    console.error("Terjadi error:", error.message);
  });

// Async function dengan throw error
async function checkNumber(num) {
  try {
    if (num % 2 !== 0) {
      throw new Error("Angka ganjil tidak diperbolehkan");
    }
    console.log("Angka valid:", num);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

checkNumber(4);
checkNumber(7);

// Fetch dengan parameter
async function getPostById(id) {
  try {
    if (id > 100) {
      throw new Error("Post tidak ada");
    }

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!response.ok) {
      throw new Error("Gagal mengambil data");
    }

    const data = await response.json();
    console.log(`Post #${id}:`, data.title);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getPostById(5);  
getPostById(150);

// Loop fetch dengan async/await
async function getFirstThreeUsers() {
  try {
    for (let id = 1; id <= 3; id++) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

      if (!response.ok) {
        throw new Error(`Gagal mengambil user dengan id ${id}`);
      }

      const user = await response.json();
      console.log(`User #${id}:`, user.name);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getFirstThreeUsers();

// Fetch data todo
async function checkTodo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/5");

    if (!response.ok) {
      throw new Error("Gagal mengambil data todo");
    }

    const todo = await response.json();

    if (todo.completed) {
      console.log("Selesai");
    } else {
      console.log("Belum selesai");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

checkTodo();

// Promise reject
const gagalPromise = new Promise((_, reject) => {
  reject("Data gagal diproses");
});

gagalPromise
  .then((res) => {
    console.log("Hasil:", res);
  })
  .catch((err) => {
    console.error("Error:", err);
  });

// Try/catch nested
async function nestedErrorHandling() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/salahurl");

    try {
      const data = await response.json();
      console.log("Data:", data);
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError.message);
    }

  } catch (networkError) {
    console.error("Error jaringan/API:", networkError.message);
  }
}

nestedErrorHandling();

// Fetch gambar
async function fetchImage() {
  try {
    const response = await fetch("https://picsum.photos/200/300");

    if (!response.ok) {
      throw new Error("Gagal ambil gambar");
    }

    console.log("Status code:", response.status);
    console.log("URL gambar:", response.url);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

fetchImage();

// Delay dengan fetch
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function delayFetch(url, ms) {
  try {
    console.log(`Menunggu ${ms / 1000} detik sebelum fetch...`);
    await delay(ms);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Gagal fetch data");
    }

    const data = await response.json();
    console.log("Hasil fetch:", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

delayFetch("https://jsonplaceholder.typicode.com/todos/1", 2000);

// Promise.race
async function fastestAPI() {
  try {
    const url1 = fetch("https://jsonplaceholder.typicode.com/posts/1");
    const url2 = fetch("https://jsonplaceholder.typicode.com/users/1");

    const winner = await Promise.race([url1, url2]);

    if (!winner.ok) {
      throw new Error("Request gagal");
    }

    const data = await winner.json();
    console.log("API tercepat memberikan data:", data);
  } catch (error) {
    console.error("Semua request gagal:", error.message);
  }
}

fastestAPI();

// Fetch JSON invalid
async function fetchInvalidJSON() {
  try {
    const response = await fetch("https://picsum.photos/200");

    const data = await response.json();
    console.log("Data:", data);
  } catch (error) {
    console.error("Error parsing JSON:", error.message);
  }
}

fetchInvalidJSON();

// Fungsi async recursive
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function recursiveCall(count = 1) {
  if (count > 3) return; 

  console.log(`Panggilan ke-${count}`);
  await delay(1000); 

  await recursiveCall(count + 1); 
}

recursiveCall();

// Error manual di fetch
async function fetchComment() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments/1");

    if (!response.ok) {
      throw new Error("Gagal fetch data");
    }

    const data = await response.json();

    if (!data.email) {
      throw new Error("Email tidak ada");
    }

    console.log("Email user:", data.email);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

fetchComment();

// Kombinasi Promise + async
function getData() {
  return new Promise((resolve, reject) => {
    const sukses = true;

    setTimeout(() => {
      if (sukses) {
        resolve("Data berhasil diambil!");
      } else {
        reject("Gagal mengambil data!");
      }
    }, 1000);
  });
}

async function run() {
  try {
    const result = await getData();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

run();
