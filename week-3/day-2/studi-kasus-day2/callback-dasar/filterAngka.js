function filterAngka(arr, callback) {
  return arr.filter(callback);
}
console.log(filterAngka([1,2,3,4], n => n % 2 === 0));
