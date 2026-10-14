// Strings di javascript

// Membuat strings
let singleQuote = 'Hello'
let doubleQuote = "World"
let backtick = `Hello World`

// Mengakses karakter dalam strings
let str = "Javascript"
console.log(str[0]); // J

// Property dan methods di dalam string

console.log(str.length); // 10 -> mengetahui panjang string

console.log(str.toUpperCase()); // JAVASCRIPT -> mengubah string menjadi huruf besar

console.log(str.toLowerCase()); // javascript -> mengubah string menjadi huruf kecil

let testTrim = "   Hello World   "
console.log(testTrim.trim()); // Hello World -> menghapus spasi di awal dan akhir string

// Manipulasi strings

// concat() -> menggabungkan string
let firstName = "John"
let lastName = "Doe"

let result = firstName + " " + lastName // kode ini menggabungkan firstName dan lastName dengan spasi di antaranya
console.log(result); // John Doe

let fullName = firstName.concat(" ", lastName) // kode ini menggabungkan firstName dan lastName dengan spasi di antaranya menggunakan method concat()
console.log(fullName); // John Doe

// concat template literal
let fullNameTemplate = `${firstName} ${lastName}` // kode ini menggabungkan firstName dan lastName dengan spasi di antaranya menggunakan template literal
console.log(fullNameTemplate); // John Doe

// Mengambil bagian dari string 
let str2 = "JavaScript"
console.log(str2.slice(0, 4)); // Java -> mengambil karakter dari indeks 0 hingga 3
console.log(str2.substring(0, 4)); // Java -> mengambil karakter dari indeks 0 hingga 3
console.log(str2.substr(0, 4)); // Java -> mengambil 4 karakter dari indeks 0

// Mengganti bagian dari string
let str3 = "Hello World"
console.log(str3.replace("World", "Javascript")); // Hello Javascript -> mengganti "World" dengan "Javascript"

const arr = ['test', 'array', 'di', 'string'];
console.log(arr.join(' ')); // test array di string -> menggabungkan elemen array menjadi string dengan spasi di antaranya

const testString = "test-string-di-string";
console.log(testString.split('-', 2)); // ['test', 'string', 'di', 'string'] -> memisahkan string menjadi array berdasarkan karakter '-'

// Pencarian di dalam string

// indexOf() -> mencari indeks dari karakter atau string tertentu
let str4 = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae esse qui at cum sed dolores et numquam voluptatibus eum. Ipsa, laboriosam! Aut expedita saepe soluta cum et reprehenderit. Rem, quo."

console.log(str4.indexOf("Recusandae")); // 58 -> mencari indeks dari "Recusandae" dalam string str4

console.log(str4.lastIndexOf("et")); // 122 -> mencari indeks terakhir dari "et" dalam string str4

// includes() -> mengecek apakah string mengandung karakter atau string tertentu
console.log(str4.includes("Recusandae")); // true -> mengecek apakah str4 mengandung "Recusandae"

