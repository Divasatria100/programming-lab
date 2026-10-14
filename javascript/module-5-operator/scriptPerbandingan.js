/* Operator Perbandingan */

// Perbandingan sama dengan
let a = 10;
let b = 10;
console.log("Sama dengan (==):", a == b); // true

// Perbandingan identik
let c = "10";
console.log("Identik (===):", a === c); // false

// Perbandingan tidak sama dengan
let d = 5;
console.log("Tidak sama dengan (!=):", a != d); // true

// Perbandingan tidak identik
console.log("Tidak identik (!==):", a !== c); // true

// Perbandingan lebih besar dari
let e = 15;
console.log("Lebih besar dari (>):", a > e); // false

// Perbandingan lebih kecil dari
console.log("Lebih kecil dari (<):", a < e); // true

// Perbandingan lebih besar atau sama dengan
console.log("Lebih besar atau sama dengan (>=):", a >= b); // true

// Perbandingan lebih kecil atau sama dengan
console.log("Lebih kecil atau sama dengan (<=):", a <= d); // false

// Penjelasan:
// - Operator perbandingan digunakan untuk membandingkan dua nilai dan menghasilkan nilai boolean (true atau false).
// - Operator == membandingkan nilai tanpa memperhatikan tipe data, sedangkan === membandingkan nilai dan tipe data.
// - Operator != dan !== digunakan untuk membandingkan ketidaksamaan, dengan != mengabaikan tipe data dan !== memperhatikan tipe data.
// - Operator >, <, >=, <= digunakan untuk membandingkan nilai numerik.

