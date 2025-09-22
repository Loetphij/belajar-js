import nilai from "./nilai.json" with { type: "json"}
export function rataRata(nilai) {
    let total = 0
    for (let i = 0; i < nilai.length; i++) {
        total += nilai[i]
    }
    return console.log(`Rata-rata nilai dari data tersebut adalah ${total / nilai.length}`)
}

export function nilaiTertinggi(){
    return console.log(`Nilai paling tinggi nilai dari data tersebut adalah ${Math.max(...nilai)}`)
}

export function nilaiTerendah(){
    return console.log(`Nilai paling rendah nilai dari data tersebut adalah ${Math.min(...nilai)}`)
}

