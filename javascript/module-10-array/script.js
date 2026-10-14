// Array Javascript

// 1. Menggunakan notasi array literal
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits); // Output: ['apple', 'banana', 'orange']

// 2. Menggunakan new Array()
let num = new Array(1, 2, 3, 4, 5);
console.log(num); // Output: [1, 2, 3, 4, 5]

// 3. Mengakses elemen array
console.log(fruits[0]); // Output: 'apple'
console.log(num[2]); // Output: 3

// Menambah atau Mengubah Elemen Array
fruits[1] = 'grape'; // Mengubah elemen kedua menjadi 'grape'
fruits[0] = 'kiwi'; // Mengubah elemen pertama menjadi 'kiwi'
console.log(fruits); // Output: ['kiwi', 'grape', 'orange']

// Manipulasi Array
let numbers = [1, 2, 3, 4, 5];
// numbers.push(6); // Menambahkan elemen 6 ke akhir array
// numbers.pop(); // Menghapus elemen terakhir dari array
// numbers.shift(); // Menghapus elemen pertama dari array
// numbers.unshift(0); // Menambahkan elemen 0 ke awal array
// console.log(numbers); // Output: [0, 1, 2, 3, 4]

let numbers2 = [6, 7];
let newnumbers = numbers.concat(numbers2); // Menggabungkan dua array
console.log(newnumbers); // Output: [0, 1, 2, 3, 4, 5, 6, 7]
newnumbers.splice(1, 2, 10);
console.log(newnumbers); // Output: [0, 10, 3, 4, 5, 6, 7]
console.log(numbers.slice(2, 4)); // Output: [2, 3] - Mengambil elemen dari index 2 hingga 4 (tidak termasuk index 4)
console.log(newnumbers.indexOf(4)); // Output: 3 - Mengembalikan index dari elemen 4

// Multidimensional Array (Array of Arrays)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][2]); // Output: 6 - Mengakses elemen pada baris ke-2 dan kolom ke-3

// Mendapatkan index dari elemen terakhir secara dinamis
let lastIndex = newnumbers.length - 1;  