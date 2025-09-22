function sortData(arr, callback) {
  return arr.sort(callback);
}
console.log(sortData([3,1,2], (a,b)=>a-b));
