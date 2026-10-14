// If Else Statements di Javascript

// If-Else Statements
// Digunakan untuk mengeksekusi blok kode tertentu berdasarkan kondisi yang diberikan. Jika kondisi bernilai true, maka blok kode di dalam if akan dijalankan. Jika kondisi bernilai false, maka blok kode di dalam else akan dijalankan.

if(kondisi) {
    // blok kode yang dijalankan jika kondisi bernilai true
} else {
    // blok kode yang dijalankan jika kondisi bernilai false
}

// if-else-if Statements
// Digunakan untuk memeriksa beberapa kondisi secara berurutan. Jika kondisi pertama tidak terpenuhi, maka akan memeriksa kondisi berikutnya, dan seterusnya hingga menemukan kondisi yang terpenuhi atau sampai semua kondisi diperiksa.

if(kondisi1) {
    // blok kode yang dijalankan jika kondisi1 bernilai true
} else if(kondisi2) {
    // blok kode yang dijalankan jika kondisi2 bernilai true
} else {
    // blok kode yang dijalankan jika semua kondisi bernilai false
}

// Contoh Penggunaan If Else Statements
let age = 18;

if(age >= 18) {
    console.log("Anda sudah dewasa.");
} else {
    console.log("Anda masih di bawah umur.");
}

// Contoh Penggunaan If Else If Statements
let score = 85;

if(score >= 90) {
    console.log("Nilai Anda A.");
} else if(score >= 80) {
    console.log("Nilai Anda B.");
} else if(score >= 70) {
    console.log("Nilai Anda C.");
} else {
    console.log("Nilai Anda D.");
}


// If Else Statements dengan Nested If
// Nested If adalah if statement yang berada di dalam if statement lainnya. Hal ini memungkinkan kita untuk memeriksa kondisi tambahan jika kondisi pertama terpenuhi.

let num = 10;

if (num > 0) {
    if (num % 2 === 0) {
        console.log("Angka positif dan genap.");
    } else {
        console.log("Angka positif dan ganjil.");
    }
} else {
    console.log("Angka negatif atau nol.");
}


