// Switch Case Statement
// Digunakan untuk mengeksekusi blok kode tertentu berdasarkan nilai dari sebuah variabel atau ekspresi. Switch case lebih efisien dibandingkan dengan if-else-if ketika memeriksa banyak kondisi yang berbeda.

/*
    Switch (ekspresi) {
        case nilai1:
            blok kode yang dijalankan jika ekspresi sama dengan nilai1
            break; // opsional, digunakan untuk menghentikan eksekusi switch setelah blok kode dijalankan
        case nilai2:
            blok kode yang dijalankan jika ekspresi sama dengan nilai2
            break; // opsional
        / / Tambahkan case tambahan sesuai kebutuhan
        default:
            blok kode yang dijalankan jika tidak ada case yang cocok
*/

const hari = 3;

switch (hari) {
    case 1:
        console.log("Hari ini adalah Senin.");
        break;
    case 2:
        console.log("Hari ini adalah Selasa.");
        break;
    case 3:
        console.log("Hari ini adalah Rabu.");
        break;
    case 4:
        console.log("Hari ini adalah Kamis.");
        break;
    case 5:
        console.log("Hari ini adalah Jumat.");
        break;
    case 6:
        console.log("Hari ini adalah Sabtu.");
        break;
    case 7:
        console.log("Hari ini adalah Minggu.");
        break;
    default:
        console.log("Hari tidak valid.");
}

// Bisa juga menggunakan namaHari = "Rabu" dan menggunakan switch case untuk mencocokkan nama hari tersebut daripada menggunakan console.log di tiap case.

// Eksekusi tanpa break akan menyebabkan eksekusi berlanjut ke case berikutnya hingga menemukan break atau akhir switch.

// Switch case dengan ekspresi yang lebih kompleks, misalnya menggunakan operator logika atau perbandingan, juga dimungkinkan. Namun, perlu diingat bahwa switch case biasanya digunakan untuk nilai yang sederhana dan diskrit.

// dengan Ekspresi atau Operasi
let nilai = 85;

switch (true) {
    case (nilai >= 90):
        console.log("Nilai Anda A.");
        break;
    case (nilai >= 80):
        console.log("Nilai Anda B.");
        break;
    case (nilai >= 70):
        console.log("Nilai Anda C.");
        break;
    case (nilai >= 60):
        console.log("Nilai Anda D.");
        break;
    default:
        console.log("Nilai Anda F.");
}

/* Kelebihan:
    Lebih mudah dibaca dan dipahami ketika memeriksa banyak kondisi yang berbeda.
    Lebih efisien dibandingkan dengan if-else-if ketika memeriksa banyak kondisi yang berbeda.
    Dapat digunakan untuk memeriksa nilai dari variabel atau ekspresi yang sederhana dan diskrit.
*/

/* Kekurangan:
    Tidak fleksibel untuk kondisi yang kompleks atau ekspresi yang lebih rumit.
    Tidak dapat digunakan untuk memeriksa rentang nilai atau kondisi yang lebih kompleks.
    Tidak dapat digunakan untuk memeriksa tipe data yang berbeda (misalnya string, number, boolean) dalam satu switch case.
*/

// Catatan: Switch case lebih cocok digunakan untuk kondisi yang sederhana dan diskrit, sedangkan if-else-if lebih fleksibel untuk kondisi yang kompleks atau ekspresi yang lebih rumit.
