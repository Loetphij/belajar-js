const siswa = '[{"nama":"A","nilai":80},{"nama":"B","nilai":60}]';
const arr = JSON.parse(siswa);
const lulus = arr.filter(s => s.nilai > 75);
console.log(lulus);
