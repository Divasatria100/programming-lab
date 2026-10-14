// Object Javascript
// Object adalah tipe data yang digunakan untuk menyimpan data dalam bentuk pasangan key-value. Key adalah nama properti, sedangkan value adalah nilai dari properti tersebut. Object dapat menyimpan berbagai jenis data, termasuk string, number, boolean, array, dan bahkan object lainnya.


// 1. Object Literal
let mobil = {
    merk  : "toyota",
    model : "avanza",
    tahun : 2024
};

// console.log(mobil); // Output: { merk: 'toyota', model: 'avanza', tahun: 2024 }

// 2. Menggunakan Constructor new Object()
let buku = new Object();
buku.judul = "Belajar Javascript";
buku.penulis = "John Doe";

// console.log(buku); // Output: { judul: 'Belajar Javascript', penulis: 'John Doe' }

let mahasiswa = {
    nama : "Dipa",
    umur : 20,
    "jurusan mahasiswa" : "Teknik Informatika"
};

// Mengakses Properti Object
// 1. Menggunakan notasi titik (dot notation)
// console.log(mahasiswa.nama); // Output: "Dipa"

// 2. Menggunakan notasi bracket (bracket notation)
// console.log(mahasiswa['umur']); // Output: 20
// console.log(mahasiswa['jurusan mahasiswa']); // Output: "Teknik Informatika"

// Menambah atau Mengubah Properti Object
// 1. Menambah Properti
mahasiswa.alamat = "Batam"; // Menambah properti baru 'alamat'
// console.log(mahasiswa); // Output: { nama: 'Dipa', umur: 20, 'jurusan mahasiswa': 'Teknik Informatika', alamat: 'Batam' }   

// 2. Mengubah Properti
mahasiswa.nama = "Bob"; // Mengubah nilai properti 'nama'
// console.log(mahasiswa); // Output: { nama: 'Bob', umur: 20, 'jurusan mahasiswa': 'Teknik Informatika', alamat: 'Batam' }

// 3. Menghapus Properti
delete mahasiswa.alamat; // Menghapus properti 'alamat'
// console.log(mahasiswa); // Output: { nama: 'Bob', umur: 20, 'jurusan mahasiswa': 'Teknik Informatika' }

// Nested Object (Object di dalam Object)
let politeknik = {
    "nama" : "Politeknik Negeri Batam",
    fakultas : {
        nama: "Fakultas Teknik Informatika",
        jurusan : "Teknik Informatika"
    }
}

// console.log(politeknik.fakultas.jurusan); // Output: "Fakultas Teknik Informatika"

// Destructuring Object
let { nama, fakultas } = politeknik;
console.log(nama, fakultas);