// Numbers di JavaScript
// Di JavaScript, numbers adalah tipe data yang digunakan untuk merepresentasikan angka. Numbers dapat berupa bilangan bulat (integer) atau bilangan desimal (floating-point), atau bilangan khusus seperti NaN (Not a Number) dan Infinity. Numbers di JavaScript memiliki beberapa metode dan properti yang dapat digunakan untuk melakukan operasi matematika, konversi tipe data, dan manipulasi angka.

// Contoh penggunaan numbers di JavaScript
let bilanganBulat = 10; // bilangan bulat
let bilanganPecahan = 3.14; // bilangan pecahan
let bilanganNegatif = -5; // bilangan negatif
let infinityValue = Infinity; // bilangan tak hingga
let nanValue = NaN; // bilangan tidak valid

console.log(bilanganBulat); // Output: 10
console.log(bilanganPecahan); // Output: 3.14
console.log(bilanganNegatif); // Output: -5
console.log(infinityValue); // Output: Infinity
console.log(nanValue); // Output: NaN

// Javascript menyediakan beberapa properti pada objek Number, seperti Number.MAX_VALUE, Number.MIN_VALUE, dan Number.NaN. Properti ini dapat digunakan untuk memeriksa batasan nilai angka di JavaScript.

// 1. Number.MAX_VALUE: Properti ini mengembalikan nilai maksimum yang dapat direpresentasikan oleh tipe data number di JavaScript. Nilai ini adalah sekitar 1.7976931348623157e+308.
console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308

// 2. Number.MIN_VALUE: Properti ini mengembalikan nilai minimum yang dapat direpresentasikan oleh tipe data number di JavaScript. Nilai ini adalah sekitar 5e-324.
console.log(Number.MIN_VALUE); // Output: 5e-324

// 3. Number.POSITIVE_INFINITY: Properti ini mengembalikan nilai positif tak hingga (Infinity).
console.log(Number.POSITIVE_INFINITY); // Output: Infinity

// 4. Number.NEGATIVE_INFINITY: Properti ini mengembalikan nilai negatif tak hingga (-Infinity).
console.log(Number.NEGATIVE_INFINITY); // Output: -Infinity

// 5. Number.NaN: Properti ini mengembalikan nilai NaN (Not a Number), yang digunakan untuk menunjukkan bahwa suatu nilai bukanlah angka yang valid.
console.log(Number.NaN); // Output: NaN
console.log("abc" / 0); // Output: NaN -> karena "abc" bukan angka, maka hasilnya adalah NaN

// Metode Bawaan pada Numbers

// 1. toString(): Metode ini digunakan untuk mengubah angka menjadi string.
let angka = 123;
console.log(angka.toString()); // Output: "123"
console.log(typeof angka.toString()); // Output: string

// 2. toFixed(digits): Metode ini digunakan untuk membulatkan angka ke jumlah digit desimal tertentu dan mengembalikan hasilnya sebagai string.
    let angkaDesimal = 3.14159;
console.log(angkaDesimal.toFixed(3)); // Output: "3.142" -> membulatkan angkaDesimal menjadi 3 digit desimal

// 3. toPrecision(precision): Metode ini digunakan untuk membulatkan angka ke jumlah digit tertentu dan mengembalikan hasilnya sebagai string.
let angkaPresisi = 123.456789;
console.log(angkaPresisi.toPrecision(5)); // Output: "123.46" -> membulatkan angkaPresisi menjadi 5 digit

// 4. parseInt(string, radix): Fungsi ini digunakan untuk mengubah string menjadi bilangan bulat (integer) dengan basis tertentu (radix).
let stringAngka = "42";
console.log(parseInt(stringAngka)); // Output: 42 -> mengubah string "42" menjadi bilangan bulat 42

let stringAngka2 = "1010";
let ubahAngka = parseInt(stringAngka2, 2); // mengubah string "1010" menjadi bilangan bulat dengan basis 2 (biner)
console.log(ubahAngka); // Output: 10 -> hasil konversi dari biner "1010" menjadi desimal 10

let stringAngka3 = "1231.55";
let ubahAngka2 = parseFloat(stringAngka3); // mengubah string "1231.55" menjadi bilangan desimal
console.log(ubahAngka2); // Output: 1231.55 -> hasil konversi dari string "1231.55" menjadi bilangan desimal 1231.55