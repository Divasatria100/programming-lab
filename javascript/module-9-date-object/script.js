// Date Object di Javascript

// Apa itu Date Object?
// Date Object adalah sebuah objek bawaan JavaScript yang digunakan untuk bekerja dengan tanggal dan waktu. Objek ini menyediakan berbagai metode untuk membuat, memanipulasi, dan mengambil informasi terkait tanggal dan waktu.

// Membuat Date Object
let now = new Date(); // Membuat objek Date dengan tanggal dan waktu saat ini
console.log(now); // Output: tanggal dan waktu saat ini

// Menggunakan string
let dateFromString = new Date("2024-06-15 10:30:00"); // Membuat objek Date dari string
console.log(dateFromString); // Output: Sat Jun 15 2024 10:30:00 GMT+0000 (Coordinated Universal Time)

// Menggunakan parameter (tahun, bulan, tanggal, jam, menit, detik, milidetik)
let customDate = new Date(2024, 5, 15, 10, 30, 0); // Membuat objek Date dengan parameter
console.log(customDate); // Output: Sat Jun 15 2024 10:30:00 GMT+0000 (Coordinated Universal Time)

// Mengambil Informasi Tanggal dan Waktu
let today = new Date();
console.log(today.getFullYear()); // Output: 2024 -> Mengambil tahun
console.log(today.getMonth()); // Output: 5 -> Mengambil bulan (0-11, Januari = 0)  
console.log(today.getDate()); // Output: 15 -> Mengambil tanggal (1-31)
console.log(today.getDay()); // Output: 6 -> Mengambil hari dalam seminggu (0-6, Minggu = 0)
console.log(today.getHours()); // Output: 10 -> Mengambil jam (0-23)
console.log(today.getMinutes()); // Output: 30 -> Mengambil menit (0-59)
console.log(today.getSeconds()); // Output: 0 -> Mengambil detik (0-59)
console.log(today.getMilliseconds()); // Output: 0 -> Mengambil milidetik (0-999)
console.log(today.getTime()); // Output: 1718473800000 -> Mengambil waktu dalam milidetik sejak 1 Januari 1970 (Unix Epoch)

// Mengatur Informasi Tanggal dan Waktu
let setDate = new Date();

// Mengatur tahun menjadi 2025
setDate.setFullYear(2025);
console.log(setDate); // Output: Sun Jun 15 2025 10:30:00 GMT+0000 (Coordinated Universal Time)

// Mengatur bulan menjadi desember (11, karena dimulai dari 0)
setDate.setMonth(11);
console.log(setDate); // Output: Sun Dec 15 2025 10:30:00 GMT+0000 (Coordinated Universal Time)

// Mengatur tanggal menjadi 25
setDate.setDate(25);
console.log(setDate); // Output: Thu Dec 25 2025 10:30:00 GMT+0000 (Coordinated Universal Time)

// Perhitungan Waktu dengan Date Object
let startDate = new Date("2024-06-01");
let endDate = new Date("2024-06-15");
let timeDifference = endDate - startDate; // Menghitung selisih waktu dalam milidetik
let daysDifference = timeDifference / (1000 * 60 * 60 * 24); // Menghitung selisih hari dengan mengkonversi milidetik menjadi hari
console.log(daysDifference); // Output: 14 -> Menghitung selisih hari antara dua tanggal