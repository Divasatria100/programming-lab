/* Implicit Conversion */

let result = "5" + 5; // "55"
console.log(result);

/* Explicit Conversion */

let numberString = "10";
let number = Number(numberString); // 10
console.log(number);

let booleanValue = true;
let booleanToNumber = Number(booleanValue); // 1
console.log(booleanToNumber);

let stringValue = "Hello";
let stringToNumber = Number(stringValue); // NaN
console.log(stringToNumber);

let emptyString = "";
let emptyStringToNumber = Boolean(emptyString); // false
console.log(emptyStringToNumber);

// Penjelasan:
// - Implicit conversion terjadi ketika JavaScript secara otomatis mengubah tipe data untuk menyelesaikan operasi.
// - Explicit conversion terjadi ketika kita secara eksplisit mengubah tipe data menggunakan fungsi seperti Number(), String(), atau Boolean().
