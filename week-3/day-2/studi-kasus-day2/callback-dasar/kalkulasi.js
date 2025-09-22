function kalkulasi(a, b, callback) {
  return callback(a, b);
}
console.log(kalkulasi(5, 3, (x, y) => x + y));
