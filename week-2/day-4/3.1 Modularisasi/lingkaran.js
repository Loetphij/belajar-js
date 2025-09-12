export function luasLingkaran(r){
    let phi;
    if (r % 7 === 0) {
        phi = 22 / 7;
    } else {
        phi = 3.14;
    }
    return phi * r * r;
}