/* Operator Bitwise */

// Contoh penggunaan operator bitwise
let a = 5; // Dalam biner: 0101
let b = 3; // Dalam biner: 0011

// Bitwise AND
let andResult = a & b; // Hasil: 1 (0001)
console.log("Bitwise AND (&):", andResult);

// Bitwise OR
let orResult = a | b; // Hasil: 7 (0111)
console.log("Bitwise OR (|):", orResult);

// Bitwise XOR
let xorResult = a ^ b; // Hasil: 6 (0110)
console.log("Bitwise XOR (^):", xorResult);

// Bitwise NOT
let notResult = ~a; // Hasil: -6 (1111...1010)
console.log("Bitwise NOT (~):", notResult);

// Bitwise Left Shift
let leftShiftResult = a << 1; // Hasil: 10 (1010)
console.log("Bitwise Left Shift (<<):", leftShiftResult);

// Bitwise Right Shift
let rightShiftResult = a >> 1; // Hasil: 2 (0010)
console.log("Bitwise Right Shift (>>):", rightShiftResult);

// Penjelasan:
// - Operator bitwise digunakan untuk melakukan operasi pada level bit dari angka.
// - Bitwise AND (&) menghasilkan 1 hanya jika kedua bit bernilai 1.
// - Bitwise OR (|) menghasilkan 1 jika minimal satu bit bernilai 1.
// - Bitwise XOR (^) menghasilkan 1 jika hanya satu bit yang bernilai 1.
// - Bitwise NOT (~) membalikkan semua bit dari angka.
// - Bitwise Left Shift (<<) menggeser bit ke kiri dan menambahkan 0 di akhir.
// - Bitwise Right Shift (>>) menggeser bit ke kanan dan menghapus bit di akhir.