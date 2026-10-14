// Math Object

// Apa itu Math Object?
// Math Object adalah sebuah objek bawaan JavaScript yang menyediakan properti dan metode untuk melakukan operasi matematika. Objek ini tidak dapat diinstansiasi, artinya kita tidak bisa membuat objek baru dari Math. Semua metode dan properti dari Math bersifat statis, sehingga kita dapat mengaksesnya langsung melalui nama objek Math.

// Properti pada Math Object
// 1. Math.PI: Properti ini mengembalikan nilai π (pi), yaitu rasio keliling lingkaran terhadap diameternya. Nilai ini adalah sekitar 3.14159.
// 2. Math.E: Properti ini mengembalikan nilai e, yaitu basis dari logaritma natural. Nilai ini adalah sekitar 2.71828.

console.log(Math.PI); // Output: 3.141592653589793
console.log(Math.E); // Output: 2.718281828459045

// Metode Math
console.log(Math.abs(-5)); // Output: 5 -> mengembalikan nilai absolut dari -5
console.log(Math.pow(2, 3)); // Output: 8 -> menghitung 2 pangkat 3
console.log(Math.sqrt(16)); // Output: 4 -> menghitung akar kuadrat dari 16
console.log(Math.cbrt(27)); // Output: 3 -> menghitung akar kubik dari 27
console.log(Math.max(1, 12, 89, 4, 75)); // Output: 89 -> mengembalikan nilai maksimum dari argumen yang diberikan
console.log(Math.min(1, 12, 89, 4, 75)); // Output: 1 -> mengembalikan nilai minimum dari argumen yang diberikan

// Pembulatan Angka
console.log(Math.round(4.7)); // Output: 5 -> membulatkan angka ke bilangan bulat terdekat
console.log(Math.ceil(4.1)); // Output: 5 -> membulatkan angka ke atas
console.log(Math.floor(4.9)); // Output: 4 -> membulatkan angka ke bawah
console.log(Math.trunc(4.9)); // Output: 4 -> menghapus angka desimal dan mengembalikan bilangan bulat

// Random Number
console.log(Math.random()); // Output: angka acak antara 0 (inklusif) dan 1 (eksklusif)
console.log(Math.random() * 100); // Output: angka acak antara 0 (inklusif) dan 100 (eksklusif) untuk generating angka acak dalam rentang tertentu, kita dapat mengalikan hasil Math.random() dengan batas atas yang diinginkan. 
