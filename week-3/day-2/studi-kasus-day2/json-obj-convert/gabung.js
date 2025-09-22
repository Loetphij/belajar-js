const user = '{"nama":"Budi"}';
const alamat = '{"kota":"Jakarta"}';
const gabung = { ...JSON.parse(user), ...JSON.parse(alamat) };
console.log(gabung);
