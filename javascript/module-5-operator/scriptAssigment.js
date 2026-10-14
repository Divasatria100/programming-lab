/* Operator Assigment */

// Penugasan sederhana
let x = 10;
console.log("Nilai awal x:", x);

// Penugasan dengan operator aritmatika
x += 5; // x sekarang 15
console.log("Setelah penugasan +=:", x);

x -= 3; // x sekarang 12
console.log("Setelah penugasan -=:", x);

x *= 2; // x sekarang 24
console.log("Setelah penugasan *=:", x);

x /= 4; // x sekarang 6
console.log("Setelah penugasan /=:", x);

x %= 5; // x sekarang 1 
console.log("Setelah penugasan %=", x);

x **= 3; // x sekarang 1
console.log("Setelah penugasan **=:", x);

// Penugasan dengan operator bitwise
let y = 5;
y &= 3; // y sekarang 1 (bitwise AND)
console.log("Setelah penugasan &=:", y);

y |= 4; // y sekarang 5 (bitwise OR)
console.log("Setelah penugasan |=:", y);

y ^= 2; // y sekarang 3 (bitwise XOR)
console.log("Setelah penugasan ^=:", y);

y <<= 1; // y sekarang 6 (bitwise left shift)
console.log("Setelah penugasan <<=:", y);

y >>= 2; // y sekarang 1 (bitwise right shift)
console.log("Setelah penugasan >>=:", y);

// Penugasan dengan operator logika
let a = true;
a &&= false; // a sekarang false (logical AND)
console.log("Setelah penugasan &&=:", a);

a ||= true; // a sekarang true (logical OR)
console.log("Setelah penugasan ||=:", a);

a ??= false; // a tetap true (nullish coalescing)
console.log("Setelah penugasan ??=:", a);

// Penjelasan:
// - Operator assigment digunakan untuk memberikan nilai pada variabel.
// - Operator seperti +=, -=, *=, /=, %=, **= digunakan untuk melakukan operasi aritmatika dan memberikan hasilnya kembali ke variabel.
// - Operator bitwise seperti &=, |=, ^=, <<=, >>= digunakan untuk operasi bitwise dan memberikan hasilnya kembali ke variabel.
// - Operator logika seperti &&=, ||=, ??= digunakan untuk operasi logika dan memberikan hasilnya kembali ke variabel.