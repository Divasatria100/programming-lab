# Belajar Casing Tipe Data
# Merubah dari satu tipe data ke tipe data lain, # misal dari tipe data integer ke tipe data float, dan sebaliknya
# tipe data = int, float, string, boolean

## INTEGER
print("====INTEGER====")
data_int = 9;
print("data = ", data_int, ", type = ", type(data_int)) # Menampilkan nilai dan tipe data dari variabel 'data_int'

data_float = float(data_int)
print("data = ", data_float, ", type = ", type(data_float)) # Menampilkan nilai dan tipe data dari variabel 'data_float'
data_str = str(data_int)
print("data = ", data_str, ", type = ", type(data_str)) # Menampilkan nilai dan tipe data dari variabel 'data_str'  
data_bool = bool(data_int)
print("data = ", data_bool, ", type = ", type(data_bool)) # Menampilkan nilai dan tipe data dari variabel 'data_bool', akan false jika nilai integer = 0, dan akan true jika nilai integer selain 0

## FLOAT
print("====FLOAT====")
data_float = 9.5
print("data = ", data_float, ", type = ", type(data_float)) # Menampilkan nilai dan tipe data dari variabel 'data_float'

data_int = int(data_float)
print("data = ", data_int, ", type = ", type(data_int)) # Menampilkan nilai dan tipe data dari variabel 'data_int', dibulatkan ke bawah, nilai float akan dibulatkan ke bawah begitu juga sebaliknya, nilai float akan dibulatkan ke atas jika nilai float lebih dari 0.5
data_str = str(data_float)
print("data = ", data_str, ", type = ", type(data_str)) # Menampilkan nilai dan tipe data dari variabel 'data_str'
data_bool = bool(data_float)
print("data = ", data_bool, ", type = ", type(data_bool)) # Menampilkan nilai dan tipe data dari variabel 'data_bool', akan false jika nilai float = 0, dan akan true jika nilai float selain 0

## BOOLEAN
print("====BOOLEAN====")
data_bool = True;
print("data = ", data_bool, ", type = ", type(data_bool)) 

data_int = int(data_bool) # akan dibulatkan ke bawah
data_str = str(data_bool)
data_float = float(data_bool) # akan false jika nilai float = 0
print("data = ", data_int, ", type = ", type(data_int)) 
print("data = ", data_str, ", type = ", type(data_str)) 
print("data = ", data_float, ", type = ", type(data_float)) 

## STRING
print("====STRING====")
data_str = "5";
print("data = ", data_str, ", type = ", type(data_str))

data_int = int(data_str) # string harus angka
data_float = float(data_str) # string harus angka
data_bool = bool(data_str) # false jika string kosong
print("data = ", data_int, ", type =", type(data_int))
print("data = ", data_float, ", type =", type(data_float))
print("data = ", data_bool, ", type =", type(data_bool))
