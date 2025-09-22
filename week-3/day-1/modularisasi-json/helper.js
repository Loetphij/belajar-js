export function formatRupiah(angka) {
  return `Rp ${angka},00`
}
// new Intl.NumberFormat('id-ID', { style : "currency", currency: 'IDR'}).format(angka)