// Loop di Javascript

// Loop digunakan untuk mengeksekusi blok kode berulang kali selama kondisi tertentu terpenuhi. Ada beberapa jenis loop di JavaScript, termasuk for, while, dan do...while, setiap jenis loop memiliki kegunaannya sendiri, tergantung pada kebutuhan.

// For Loop

/*
    for (inisialisasi; kondisi; increment/decrement) {
        blok kode yang akan dieksekusi selama kondisi bernilai true
    }
*/

for (let i = 1; i <= 5; i++) {
    console.log("Perulangan ke-" + i);
}

// While Loop

/*
    while (kondisi) {
        blok kode yang akan dieksekusi selama kondisi bernilai true
    }
*/

let y = 1;

while (y <= 5) {
    console.log("Perulangan ke-" + y);
    y++;
}

// Do...While Loop

/*
    do {
        blok kode yang akan dieksekusi setidaknya satu kali, kemudian akan terus dieksekusi selama kondisi bernilai true
    } while (kondisi);
*/

let z = 1;

do {
    console.log("Perulangan ke-" + z);
    z++;
} while(z <= 5);

// For-In Loop

/*
    for (variabel in objek) {
        blok kode yang akan dieksekusi untuk setiap properti dalam objek
    }
*/

const object = {nama: "Dipa", umur: 20};

for (let properti in object) {
    console.log(properti + ":" + object[properti]);
}

// For-Of Loop

/*
    for (variabel of iterable) {
        blok kode yang akan dieksekusi untuk setiap elemen dalam iterable (seperti array atau string)
    }
*/
let sum = 0;
const array = [1, 2, 3, 4, 5];

for (let nilai of array) {
    console.log("Nilai: " + nilai);
    sum += nilai;
}

console.log("Jumlah total: " + sum);

// Break dan Continue

// Break digunakan untuk menghentikan eksekusi loop sebelum kondisi terpenuhi, sedangkan continue digunakan untuk melewati iterasi saat ini dan melanjutkan ke iterasi berikutnya.
let a = 1;
while (a <= 10) {
    if (a === 5) {
        break; // menghentikan loop saat a sama dengan 5
    }
    console.log("Perulangan ke-" + a);
    a++;
}
