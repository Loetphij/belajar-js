function greet(nama, callback) {
  console.log(callback(nama));
}
greet("Ali", n => `Halo ${n}!`);
