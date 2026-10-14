# Input user

# data yang dimasukkan pasti string
data = input("Masukkan data: ")

print("data = ", data, ", type = ", type(data))

# jika ingin mengambil int, maka
angka = int(input("masukkan angka: "))
angka = float(input("masukkan angka: "))

print("data = ", angka, ", type = ", type(angka))

# bagaimana dengan boolean
biner = bool(int(input("masukkan nilai boolean: "))) # Mengubah input 0 atau 1 menjadi False atau True, karena bool() membutuhkan nilai numerik untuk menentukan kondisi boolean

print("data = ", biner, ", type = ", type(biner))





