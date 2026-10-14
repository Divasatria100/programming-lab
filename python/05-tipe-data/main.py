# a = 10, a adalah variabel dengan nilai 10

# tipe data: angka satuan (integer)
data_integer = 100
print("data : ", data_integer, ", bertipe : ", type(data_integer)) # Menampilkan nilai dan tipe data dari variabel 'data_integer'

# tipe data: angka dengan koma (float)
data_float = 1.5
print("data : ", data_float, ", bertipe : ", type(data_float)) # Menampilkan nilai dan tipe data dari variabel 'data_float'

# tipe data: kumpulan karakter (string)
data_string = "ucup"
print("data : ", data_string, ", bertipe : ", type(data_string)) # Menampilkan nilai dan tipe data dari variabel 'data_string'

# tipe data: biner true/false (boolean)
data_bool = True
print("data : ", data_bool, ", bertipe : ", type(data_bool)) # Menampilkan nilai dan tipe data dari variabel 'data_bool'

## tipe data khusus

# bilangan kompleks
data_complex = complex(5, 6)
print("data : ", data_complex, ", bertipe : ", type(data_complex)) # Menampilkan nilai dan tipe data dari variabel 'data_complex'

# tipe data dari bahasa C
# import library ctypes supaya bisa menggunakan tipe data dari bahasa C
from ctypes import c_double, c_char, c_long
data_c_double = c_double(10.5)
print("data : ", data_c_double, ", bertipe : ", type(data_c_double)) # Menampilkan nilai dan tipe data dari variabel 'data_c_double'

data_c_char = c_char(b'A')
print("data : ", data_c_char, ", bertipe : ", type(data_c_char)) # Menampilkan nilai dan tipe data dari variabel 'data_c_char'

data_c_long = c_long(1000)
print("data : ", data_c_long, ", bertipe : ", type(data_c_long)) # Menampilkan nilai dan tipe data dari variabel 'data_c_long'

