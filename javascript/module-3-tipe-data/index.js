/* Tipe Data Primitif adalah tipe data yang tidak dapat diubah (immutable) dan tidak memiliki metode atau properti. Tipe data primitif mencakup string, number, boolean, undefined, null, symbol, dan bigint. Berikut adalah penjelasan singkat tentang masing-masing tipe data primitif: */

//  String adalah tipe data yang digunakan untuk menyimpan teks. String dapat terdiri dari satu atau lebih karakter, dan biasanya dikelilingi oleh tanda kutip (baik tunggal ' ' atau ganda " "). Contoh penggunaan string dalam JavaScript:

const nama = "Dipa";
const negara = 'Indonesia';
const domisili = `Batam`;


//  Number adalah tipe data yang digunakan untuk menyimpan nilai numerik, baik
//  bilangan bulat (integer) maupun bilangan desimal (floating-point). Contoh penggunaan number dalam JavaScript:

const umur = 25; // Bilangan bulat
const tinggi = 1.75; // Bilangan desimal;

console.log(umur, tinggi);

// Boolean adalah tipe data yang hanya memiliki dua nilai, yaitu true (benar) dan false (salah). Tipe data ini sering digunakan untuk menyimpan hasil dari perbandingan atau kondisi logika. Contoh penggunaan boolean dalam JavaScript:

const isStudent = true;
const isEmployed = false;

// Undefined adalah tipe data yang menunjukkan bahwa sebuah variabel belum memiliki nilai yang ditetapkan. Variabel yang dideklarasikan tetapi tidak diinisialisasi akan memiliki nilai undefined. Contoh penggunaan undefined dalam JavaScript:

let x; // Variabel ini belum diinisialisasi, sehingga nilainya adalah undefined

// null adalah tipe data yang digunakan untuk menunjukkan bahwa sebuah variabel tidak memiliki nilai atau objek. Nilai null biasanya digunakan untuk mengindikasikan bahwa sebuah variabel sengaja dikosongkan atau tidak memiliki nilai yang valid. Contoh penggunaan null dalam JavaScript:

const y = null; // Variabel ini sengaja dikosongkan, sehingga nilainya adalah null

// https://github.com/rohan-paul/Awesome-JavaScript-Interviews/blob/master/Javascript/Tricky-JS-Problems/typeof-null-why-its-object.md

// Symbol adalah tipe data yang digunakan untuk membuat identifier unik. Setiap simbol yang dibuat akan memiliki nilai yang unik, bahkan jika mereka memiliki deskripsi yang sama. Contoh penggunaan symbol dalam JavaScript:

const sym1 = Symbol('deskripsi 1');
const sym2 = Symbol('deskripsi 2');

// Bigint adalah tipe data yang digunakan untuk menyimpan bilangan bulat yang sangat besar, yang melebihi batas maksimum dari tipe data number. BigInt memungkinkan kita untuk bekerja dengan angka yang sangat besar tanpa kehilangan presisi. Contoh penggunaan BigInt dalam JavaScript:

const bigInt1 = 1234567890123456789012345678901234567890n; // Menggunakan 'n' di akhir untuk menunjukkan bahwa ini adalah BigInt
const bigInt2 = BigInt("1234567890123456789012345678901234567890"); // Menggunakan fungsi BigInt untuk membuat BigInt dari string

/* Tipe Data Reference adalah tipe data yang menyimpan referensi ke objek atau nilai yang kompleks. Tipe data reference mencakup objek, array, dan fungsi. Berikut adalah penjelasan singkat tentang masing-masing tipe data reference: */

// Objek adalah tipe data yang digunakan untuk menyimpan koleksi data yang terstruktur. Objek terdiri dari pasangan kunci-nilai, di mana kunci adalah string dan nilai dapat berupa tipe data apa pun, termasuk objek lainnya. Contoh penggunaan objek dalam JavaScript:

const orang = {
    nama: "Dipa",
    umur: 25,
    pekerjaan: "Developer"
};

// Array adalah tipe data yang digunakan untuk menyimpan daftar nilai yang terurut. Array dapat berisi elemen dengan tipe data apa pun, termasuk objek dan array lainnya. Contoh penggunaan array dalam JavaScript:

const hobby = ["Membaca", "Bersepeda", "Memasak"];

// Function adalah tipe data yang digunakan untuk menyimpan blok kode yang dapat dieksekusi. Fungsi dapat menerima parameter dan mengembalikan nilai. Contoh penggunaan fungsi dalam JavaScript:

function sayHello(){
    return "Hello dari Dipa!";
}


const output = sayHello(); // Memanggil fungsi dan menyimpan hasilnya dalam variabel output

console.log(output);

/* Perbedaan tipe data primitive dan references */

// Tipe data primitif

let a = 10;
let b = a; // b mendapatkan nilai 10 dari a, maka b akan tetap memiliki nilai 10 meskipun a diubah

a = 20;

console.log(b); // Output: 10

// Tipe data reference

let person1 = {
    name: "Dipa",
    age: 25
};

let person2 = person1; // person2 mendapatkan referensi ke objek yang sama dengan person1, maka perubahan pada person1 akan mempengaruhi person2

person1.age = 30;

console.log(person2.age); // Output: 30