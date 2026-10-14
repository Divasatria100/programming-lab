/* Operator Logika */

// Operator AND
let a = true;
let b = false;
console.log("AND (&&):", a && b); // false

// Operator OR
console.log("OR (||):", a || b); // true

// Operator NOT
console.log("NOT (!):", !a); // false

// Operator Nullish Coalescing
let c = null;
let d = "Default Value";
console.log("Nullish Coalescing (??):", c ?? d); // "Default Value"

// Penjelasan:
// - Operator logika digunakan untuk menggabungkan atau memodifikasi nilai boolean.
// - AND (&&) menghasilkan true jika kedua operand bernilai true, jika tidak maka false.
// - OR (||) menghasilkan true jika salah satu operand bernilai true, jika tidak maka false.
// - NOT (!) membalikkan nilai boolean, true menjadi false dan sebaliknya.
// - Nullish Coalescing (??) menghasilkan operand kanan jika operand kiri null atau undefined, jika tidak maka menghasilkan operand kiri.