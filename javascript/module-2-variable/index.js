/*
    var, dia bisa diakses dari mana saja, baik di dalam maupun di luar fungsi. Namun, variabel yang dideklarasikan dengan var akan memiliki nilai undefined jika diakses sebelum deklarasi, karena var mengalami hoisting.
*/

// if(true){
//     var nama = "Dipa";
//     console.log(nama); //output: Dipa
// } //scope
// console.log(nama); //output: Dipa

/*
    let, hanya bisa diakses di dalam blok tempat variabel tersebut dideklarasikan. Jika mencoba mengakses variabel yang dideklarasikan dengan let di luar bloknya, akan menghasilkan error ReferenceError.
*/

if(true){
    let nama = "Dipa";
    console.log(nama); //output: Dipa
} //scope

/*
    const, mirip dengan let, hanya bisa diakses di dalam blok tempat variabel tersebut dideklarasikan. Namun, variabel yang dideklarasikan dengan const harus diinisialisasi pada saat deklarasi dan nilainya tidak dapat diubah setelah itu. Jika mencoba mengakses variabel yang dideklarasikan dengan const di luar bloknya, akan menghasilkan error ReferenceError.
*/

if(true){
    const nama = "Dipa";
    console.log(nama); //output: Dipa
}