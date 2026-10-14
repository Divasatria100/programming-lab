/* Operator Ternary */

// Contoh penggunaan operator ternary
let age = 18;
let isAdult = age >= 18 ? "Dewasa" : "Anak-anak";
console.log("Status:", isAdult); // "Dewasa"

let score = 85;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" :
            score >= 60 ? "D" : "E";
console.log("Grade:", grade); // "B"

// Penjelasan:
// - Operator ternary adalah operator kondisional yang memiliki tiga bagian: kondisi, nilai jika benar, dan nilai jika salah.
// - Sintaksnya adalah: kondisi ? nilaiJikaBenar : nilaiJikaSalah.
// - Operator ternary sering digunakan untuk menggantikan pernyataan if-else sederhana, membuat kode lebih ringkas dan mudah dibaca.
