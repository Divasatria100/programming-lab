// Function

// Function adalah blok kode yang dirancang untuk melakukan tugas tertentu. Fungsi dapat digunakan kembali di seluruh program, yang membantu mengurangi duplikasi kode dan meningkatkan keterbacaan.

// Membuat Function, untuk membuat function di JavaScript, kita menggunakan kata kunci function diikuti dengan nama function, parameter (jika ada), dan blok kode yang akan dieksekusi saat function dipanggil.

/*
    function namaFunction(parameter1, parameter2, ...) {
        blok kode yang akan dieksekusi
    }
*/

function sapaPengguna(nama) {
    console.log("Halo, " + nama + "! Selamat datang!");
}

// Memanggil Function, untuk memanggil function, kita cukup menulis nama function diikuti dengan tanda kurung dan argumen (jika ada).

sapaPengguna("Dipa"); // Output: Halo, Dipa! Selamat datang!

function sapaSemua() {
    console.log("Halo semua! Selamat datang!");
}

sapaSemua(); // Output: Halo semua! Selamat datang!

// Parameter dan Argumen, parameter adalah variabel yang didefinisikan dalam deklarasi function, sedangkan argumen adalah nilai yang dikirimkan ke function saat dipanggil. Parameter memungkinkan kita untuk membuat function yang lebih fleksibel dan dapat digunakan kembali dengan berbagai input.

function hitungLuasPersegiPanjang(panjang, lebar) {
    return console.log(panjang * lebar);
}

hitungLuasPersegiPanjang(5, 3); // Output: 15

// Return Statement, return statement digunakan untuk mengembalikan nilai dari sebuah function. Ketika return statement dieksekusi, function akan berhenti dan mengembalikan nilai yang ditentukan.

function kuadrat (num) {
    if (num > 0) {
        return num * num;
    }
    console.log("Input harus berupa angka positif.");
}

let kuadrat4 = kuadrat(4); // Output: 16
console.log(kuadrat4); // Output: undefined, karena function kuadrat tidak mengembalikan nilai, hanya mencetak ke console.