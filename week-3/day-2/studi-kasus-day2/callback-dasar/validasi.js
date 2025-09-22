function validasi(data, callback) {
  return callback(data) ? "Valid" : "Tidak valid";
}
console.log(validasi("tes", d => d.length > 0));
