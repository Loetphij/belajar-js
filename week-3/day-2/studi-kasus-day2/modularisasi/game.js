export function tebakAngka(tebakan, angkaRahasia) {
    if (tebakan === angkaRahasia) return "Tebakan benar!";
    if (tebakan > angkaRahasia) return "Kegedean!";
    return "Kekecilan!";
}
